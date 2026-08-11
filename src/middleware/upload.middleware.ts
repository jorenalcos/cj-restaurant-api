import multer from "multer";

const storage = multer.memoryStorage();

export const upload = multer({
  fileFilter: (req, file, cb) => {
    const allowedMimeTypes = [
      "image/jpeg",
      "image/png",
      "image/webp",
    ];

    if (!allowedMimeTypes.includes(file.mimetype)) {
      return cb(
        new Error("Only JPEG, PNG, and WebP images are allowed.")
      );
    }

    cb(null, true);
  },
  storage,
  limits: {
    fileSize: 5 * 1024 * 1024, // 5MB
  },
});