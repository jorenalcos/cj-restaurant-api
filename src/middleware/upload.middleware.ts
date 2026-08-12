import multer from "multer";
import path from "path";

const storage = multer.memoryStorage();

export const upload = multer({
  storage,
  fileFilter: (req, file, cb) => {
    const allowedMimeTypes = [
      "image/jpeg",
      "image/png",
      "image/webp",
    ];

    const allowedExtensions = [".jpg", ".jpeg", ".png", ".webp"];
    const extension = path.extname(file.originalname).toLowerCase();

    if (!allowedExtensions.includes(extension) || !allowedMimeTypes.includes(file.mimetype)) {
      return cb(
        new Error("Only JPEG, PNG, and WebP images are allowed.")
      );
    }

    cb(null, true);
  },
  limits: {
    fileSize: 5 * 1024 * 1024, // 5MB
  },
});