import { NextFunction, Request, Response } from "express";
import ApiError from "../utils/ApiError";

export function errorMiddleware(
    err: Error,
    req: Request,
    res: Response,
    next: NextFunction
) {
    console.error("======== ERROR ========");
    console.error(err);
    console.error("=======================");

    if (err instanceof ApiError) {
        return res.status(err.statusCode).json({
            success: false,
            message: err.message,
        });
    }

    console.error(err);

    return res.status(500).json({
        success: false,
        message: "Internal Server Error",
    });
}