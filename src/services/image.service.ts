import { UploadApiResponse } from "cloudinary";
import cloudinary from "../config/cloudinary";
import streamifier from "streamifier";

class ImageService {
  async uploadImage(buffer: Buffer): Promise<UploadApiResponse> {
    return new Promise((resolve, reject) => {
      const stream = cloudinary.uploader.upload_stream(
        {
          folder: "cj-restaurant-api/products",
        },
        (error, result) => {
          if (error) return reject(error);

          resolve(result!);
        }
      );

      streamifier.createReadStream(buffer).pipe(stream);
    });
  }
}

export default new ImageService();