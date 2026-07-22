import { Request, Response, NextFunction } from "express";
import { UnauthorizedError } from "../errors/UnauthorizedError";
import { verifyAccessToken } from "../utils/jwt";

export async function authenticate(req: Request, res: Response, next: NextFunction) {
    const authorization = req.headers.authorization;

    if (!authorization) {
        throw new UnauthorizedError("Authorization header is missing.");
    }

    const [scheme, token] = authorization.split(" ");

    if (scheme !== "Bearer" || !token) {
        throw new UnauthorizedError("Invalid authorization header.");
    }

    try {
        const payload = verifyAccessToken(token);
        req.user = payload;
        next();
    } catch {
        throw new UnauthorizedError("Invalid or expired access token.");
    }
}