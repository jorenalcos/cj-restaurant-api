import jwt from "jsonwebtoken";
import { UserRole } from "@prisma/client";

export interface JwtPayload {
  id: number;
  email: string;
  role: UserRole;
}

export function generateAccessToken(payload: JwtPayload) {
  return jwt.sign(
    payload,
    process.env.JWT_SECRET!,
    {
      expiresIn: process.env.JWT_EXPIRES_IN || "1d",
    }
  );
}

export function verifyAccessToken(token: string): JwtPayload {
  return jwt.verify(
    token,
    process.env.JWT_SECRET!
  ) as JwtPayload;
}