import { NextFunction, Request, Response } from "express";
import { ZodError } from "zod";

import { UnauthorizedError } from "../errors/UnauthorizedError";
// Adjust this import path/name to your actual file.

export const errorMiddleware = (
  error: unknown,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.error(error);

  // Zod validation errors
  if (error instanceof ZodError) {
    return res.status(400).json({
      success: false,
      message: "Validation failed.",
      errors: error.issues.map((issue) => ({
        field: issue.path.join("."),
        message: issue.message,
      })),
    });
  }

  // Unauthorized errors
  if (error instanceof UnauthorizedError) {
    return res.status(401).json({
      success: false,
      message: error.message,
    });
  }

  return res.status(500).json({
    success: false,
    message: "Internal server error.",
  });
};