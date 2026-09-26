import cors from "cors";

const allowedOrigins = process.env.CORS_ORIGINS
  ? process.env.CORS_ORIGINS.split(",").map((origin) => origin.trim())
  : [];

export const corsMiddleware = cors({
  origin: (origin, callback) => {
    // Allow requests without an Origin header
    // such as Postman/server-to-server requests.
    if (!origin) {
      return callback(null, true);
    }

    if (allowedOrigins.includes(origin)) {
      return callback(null, true);
    }

    return callback(new Error("CORS origin not allowed."));
  },
  credentials: true,
});