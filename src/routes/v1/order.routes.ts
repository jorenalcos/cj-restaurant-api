import { Router } from "express";
import OrderController from "../../modules/order/order.controller";
import { authenticate } from "../../middleware/authenticate.middleware";
import { authorize } from "../../middleware/authorize.middleware";
import { UserRole } from "@prisma/client";

const router = Router();

/**
 * @swagger
 * /orders:
 *   post:
 *     summary: Create a new order
 *     description: Create a customer order with order items and payment information.
 *     tags:
 *       - Orders
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       $ref: '#/components/requestBodies/CreateOrderRequest'
 *     responses:
 *       201:
 *         $ref: '#/components/responses/CreateOrderResponse'
 *       400:
 *         $ref: '#/components/responses/BadRequestResponse'
 *       401:
 *         $ref: '#/components/responses/UnauthorizedResponse'
 *       403:
 *         $ref: '#/components/responses/ForbiddenResponse'
 *       404:
 *         $ref: '#/components/responses/NotFoundResponse'
 *       500:
 *         $ref: '#/components/responses/InternalServerErrorResponse'
 */

router.post("/", authenticate, authorize(UserRole.ADMIN, UserRole.MANAGER), OrderController.createOrder);

export default router;