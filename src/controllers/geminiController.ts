import { Request, Response } from 'express';
import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';
import axios from 'axios';

dotenv.config();

const apiKey = process.env.GEMINI_API_KEY || '';
const apiUrl = `https://vision.googleapis.com/v1/images:annotate?key=${apiKey}`;

export const processImage = async (req: Request, res: Response) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'Nenhuma imagem foi enviada.' });
    }

    const filePath = req.file.path;
    const imageBuffer = fs.readFileSync(filePath);
    const imageBase64 = imageBuffer.toString('base64');

    const requestBody = {
      requests: [
        {
          image: {
            content: imageBase64
          },
          features: [
            {
              type: 'LABEL_DETECTION',
              maxResults: 10
            }
          ]
        }
      ]
    };

    const response = await axios.post(apiUrl, requestBody, {
      headers: {
        'Content-Type': 'application/json'
      }
    });

    // Remova o arquivo local depois do processamento
    fs.unlinkSync(filePath);

    res.json(response.data);
  } catch (error: any) {
    res.status(500).json({ error: 'Erro ao processar a imagem.', details: error.message });
  }
};
