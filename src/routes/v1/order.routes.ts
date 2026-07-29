import { Router } from "express";
import OrderController from "../../modules/order/order.controller";
import { authenticate } from "../../middleware/authenticate.middleware";
import { authorize } from "../../middleware/authorize.middleware";
import { UserRole } from "@prisma/client";

const router = Router();

/**
 * @swagger
 * /orders:
 *   get:
 *     summary: Get all orders
 *     description: Retrieve a list of all customer orders.
 *     tags:
 *       - Orders
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       200:
 *         $ref: '#/components/responses/OrderListResponse'
 *       401:
 *         $ref: '#/components/responses/UnauthorizedResponse'
 *       403:
 *         $ref: '#/components/responses/ForbiddenResponse'
 *       500:
 *         $ref: '#/components/responses/InternalServerErrorResponse'
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
 *       401:
 *         $ref: '#/components/responses/UnauthorizedResponse'
 *       403:
 *         $ref: '#/components/responses/ForbiddenResponse'
 *       404:
 *         $ref: '#/components/responses/NotFoundResponse'
 */

router.post("/", authenticate, authorize(UserRole.ADMIN, UserRole.MANAGER), OrderController.createOrder);
router.get("/", authenticate, authorize(UserRole.ADMIN, UserRole.MANAGER), OrderController.getOrders);

export default router;