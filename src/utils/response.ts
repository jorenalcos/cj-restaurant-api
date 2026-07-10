import { Response } from "express";

interface ApiResponse<T> {
  success: boolean;
  message: string;
  data?: T;
  pagination?: unknown;
}

export function successResponse<T>(
  res: Response,
  message: string,
  data?: T,
  status = 200,
  pagination?: unknown
) {
  const response: ApiResponse<T> = {
    success: true,
    message,
    data,
    pagination,
  };

  return res.status(status).json(response);
}

export function errorResponse(
  res: Response,
  message: string,
  status = 500
) {
  return res.status(status).json({
    success: false,
    message,
  });
}