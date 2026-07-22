import { NextFunction, Request, Response } from "express";
import ApiError from "../utils/ApiError";
import { ForbiddenError } from "../errors/ForbiddenError";

export function errorMiddleware(err: Error, req: Request, res: Response, next: NextFunction) {
    if (err instanceof ApiError) {
        return res.status(err.statusCode).json({
            success: false,
            message: err.message,
        });
    }

    if (err instanceof ForbiddenError) {
        return res.status(err.statusCode).json({
            success: false,
            message: err.message,
        });
    }

    return res.status(500).json({
        success: false,
        message: "Internal Server Error",
    });
}