import { Router } from "express";
import { health } from "./health.controller";

const router = Router();

/**
 * @swagger
 * /api/v1/health:
 *   get:
 *     summary: Health Check
 *     tags:
 *       - Health
 *     responses:
 *       200:
 *         description: API is running
 */

router.get("/", health);

export default router;