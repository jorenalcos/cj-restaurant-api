import { Router } from "express";

import authController from "../../modules/auth/auth.controller";
import { authRateLimiter } from "../../middleware/rate-limit.middleware";
import { LoginDto } from "../../modules/auth/dto/login.dto";
import { validate } from "../../middleware/validate.middleware";

const router = Router();

/**
 * @swagger
 * /auth/login:
 *   post:
 *     summary: Login
 *     tags:
 *       - Authentication
 *     requestBody:
 *       $ref: '#/components/requestBodies/LoginRequest'
 *     responses:
 *       200:
 *         $ref: '#/components/responses/LoginResponse'
 *       401:
 *         description: Invalid email or password
 *       500:
 *         description: Internal Server Error
 */

router.post("/login", authRateLimiter, validate({ body: LoginDto }), authController.login);

export default router;