import { Router } from 'express';
import multer from 'multer';
import path from 'path';
import { processImage } from '../controllers/geminiController';

const router = Router();
const upload = multer({ dest: path.join(__dirname, '../../uploads/') });

router.post('/upload', upload.single('image'), processImage);

export default router;
