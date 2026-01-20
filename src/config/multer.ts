import { v2 as cloudinary } from 'cloudinary';
import CloudinaryStorage from 'multer-storage-cloudinary';
import multer from 'multer';

// 1. Configurazione (Resta invariata)
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME as string,
  api_key: process.env.CLOUDINARY_API_KEY as string,
  api_secret: process.env.CLOUDINARY_API_SECRET as string,
});

// 2. Fix dello Storage
const storage = new CloudinaryStorage({
  // FIX: Passa l'oggetto cloudinary direttamente. 
  // Se la libreria fallisce cercando .v2, forniscile un oggetto che la simuli
  cloudinary: {
    v2: cloudinary
  } as any,
  params: {
    folder: 'secret-santa-uploads',
    allowed_formats: ['jpg', 'jpeg', 'png'],
    transformation: [{ width: 500, height: 500, crop: 'limit' }]
  } as any,
});

export const upload = multer({ storage: storage });