import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// app.use(express.json({ limit: '10mb' })); // Para lidar com grandes strings base64

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});