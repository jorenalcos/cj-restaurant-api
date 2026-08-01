import { Router } from "express";
import OrderController from "../../modules/order/order.controller";
import { authenticate } from "../../middleware/authenticate.middleware";
import { authorize } from "../../middleware/authorize.middleware";
import { UserRole } from "@prisma/client";
import orderController from "../../modules/order/order.controller";

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
 * 
 * /orders/{id}:
 *   get:
 *     summary: Get order by ID
 *     description: Retrieve a customer order by its ID.
 *     tags:
 *       - Orders
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - $ref: '#/components/parameters/OrderId'
 *     responses:
 *       200:
 *         $ref: '#/components/responses/OrderResponse'
 *       401:
 *         $ref: '#/components/responses/UnauthorizedResponse'
 *       403:
 *         $ref: '#/components/responses/ForbiddenResponse'
 *       404:
 *         $ref: '#/components/responses/NotFoundResponse'
 * 
 * /orders/{id}/status:
 *   patch:
 *     summary: Update order status
 *     description: Update the status of an existing order.
 *     tags:
 *       - Orders
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - $ref: '#/components/parameters/OrderId'
 *     requestBody:
 *       $ref: '#/components/requestBodies/UpdateOrderStatusRequest'
 *     responses:
 *       200:
 *         $ref: '#/components/responses/UpdateOrderStatusResponse'
 *       401:
 *         $ref: '#/components/responses/UnauthorizedResponse'
 *       403:
 *         $ref: '#/components/responses/ForbiddenResponse'
 *       404:
 *         $ref: '#/components/responses/NotFoundResponse'
 *       500:
 *         $ref: '#/components/responses/InternalServerErrorResponse'
 * 
 * /orders/{id}/cancel:
 *   patch:
 *     summary: Cancel an order
 *     description: Cancel an order that has not yet reached the delivery stage.
 *     tags:
 *       - Orders
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - $ref: '#/components/parameters/OrderId'
 *     responses:
 *       200:
 *         $ref: '#/components/responses/CancelOrderResponse'
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
router.get("/", authenticate, authorize(UserRole.ADMIN, UserRole.MANAGER), OrderController.getOrders);
router.get("/:id", authenticate, authorize(UserRole.ADMIN, UserRole.MANAGER), OrderController.getOrder);
router.patch("/:id/status", authenticate, authorize(UserRole.ADMIN, UserRole.MANAGER), orderController.updateStatus);
router.patch("/:id/cancel", authenticate, authorize(UserRole.ADMIN, UserRole.MANAGER), orderController.cancelOrder);

export default router;