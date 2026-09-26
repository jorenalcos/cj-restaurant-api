import rateLimit from "express-rate-limit";

export const apiRateLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 200,
  standardHeaders: "draft-8",
  legacyHeaders: false,

  skip: () => process.env.NODE_ENV === "test",

  message: {
    success: false,
    message: "Too many requests. Please try again later.",
    code: "RATE_LIMIT_EXCEEDED",
  },
});

export const authRateLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 10,
  standardHeaders: "draft-8",
  legacyHeaders: false,

  skip: () => process.env.NODE_ENV === "test",

  message: {
    success: false,
    message: "Too many login attempts. Please try again later.",
    code: "AUTH_RATE_LIMIT_EXCEEDED",
  },
});