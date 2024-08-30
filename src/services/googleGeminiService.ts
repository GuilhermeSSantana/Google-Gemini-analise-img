// import { Request, Response } from 'express';
// import multer from 'multer';
// import fs from 'fs';
// import { GoogleAIFileManager } from '@google/generative-ai/server';

// const fileManager = new GoogleAIFileManager(process.env.API_KEY!);

// // Configuração do multer para armazenamento temporário em disco
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, 'uploads/'); // Define a pasta para salvar os arquivos temporariamente
//   },
//   filename: (req, file, cb) => {
//     cb(null, Date.now() + '-' + file.originalname); // Define o nome do arquivo
//   },
// });

// const upload = multer({ storage });

// export const uploadFile = async (req: Request, res: Response) => {
//   if (!req.file) {
//     return res.status(400).json({ error: 'No file uploaded' });
//   }

//   const filePath = req.file.path; // Caminho do arquivo salvo temporariamente
//   const mimeType = req.file.mimetype;
//   const displayName = req.file.originalname;

//   try {
//     // Faz upload do arquivo usando o caminho do arquivo
//     const uploadResponse = await fileManager.uploadFile(filePath, {
//       mimeType,
//       displayName,
//     });

//     // Exclui o arquivo temporário após o upload
//     fs.unlink(filePath, (err) => {
//       if (err) {
//         console.error(`Error deleting temporary file: ${err}`);
//       }
//     });

//     // Retorna a resposta do upload
//     return res.json({
//       message: `Uploaded file ${uploadResponse.file.displayName} as: ${uploadResponse.file.uri}`,
//     });
//   } catch (error) {
//     // Especifica que o erro é do tipo Error
//     const errMsg = error instanceof Error ? error.message : 'Unknown error';
//     return res.status(500).json({ error: 'Error uploading file', details: errMsg });
//   }
  
// };

// // Exporta o middleware de upload e o controlador
// export const uploadMiddleware = upload.single('file');
