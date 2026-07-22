import { NextFunction, Request, Response } from "express";
import { UserRole } from "@prisma/client";

import { UnauthorizedError } from "../errors/UnauthorizedError";
import { ForbiddenError } from "../errors/ForbiddenError";

export function authorize(...allowedRoles: UserRole[]) {
    return (req: Request, res: Response, next: NextFunction) => {
        if (!req.user) {
            throw new UnauthorizedError("Authentication required.");
        }

        if (!allowedRoles.includes(req.user.role)) {
            throw new ForbiddenError(
                "You do not have permission to perform this action."
            );
        }

        next();
    };
}