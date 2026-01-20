declare module 'multer-storage-cloudinary' {
  import { StorageEngine } from 'multer';

  interface CloudinaryStorageOptions {
    cloudinary: any;
    params?: {
      folder?: string;
      allowed_formats?: string[];
      transformation?: Array<{ [key: string]: any }>;
      [key: string]: any;
    };
    // Mantieni questi se vuoi passarli direttamente
    folder?: string; 
    allowed_formats?: string[];
  }

  class CloudinaryStorage implements StorageEngine {
    constructor(options: CloudinaryStorageOptions);
    _handleFile(req: any, file: any, callback: any): void;
    _removeFile(req: any, file: any, callback: any): void;
  }

  export default CloudinaryStorage; // Cambiato in default per compatibilità ESModules
}