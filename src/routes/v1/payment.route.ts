import { Router } from "express";
import { authenticate } from "../../middleware/authenticate.middleware";
import { authorize } from "../../middleware/authorize.middleware";
import { UserRole } from "@prisma/client";
import paymentController from "../../modules/payment/payment.controller";

const router = Router();

/**
 * @swagger
 * /payments:
 *   get:
 *     summary: Get all payments
 *     tags:
 *       - Payments
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       200:
 *         $ref: '#/components/responses/PaymentListResponse'
 *       401:
 *         $ref: '#/components/responses/UnauthorizedResponse'
 *       403:
 *         $ref: '#/components/responses/ForbiddenResponse'
 *       500:
 *         $ref: '#/components/responses/InternalServerErrorResponse'
 * 
 * /payments/{id}:
 *   get:
 *     summary: Get payment by ID
 *     tags:
 *       - Payments
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - $ref: '#/components/parameters/PaymentId'
 *     responses:
 *       200:
 *         $ref: '#/components/responses/PaymentResponse'
 *       401:
 *         $ref: '#/components/responses/UnauthorizedResponse'
 *       403:
 *         $ref: '#/components/responses/ForbiddenResponse'
 *       404:
 *         $ref: '#/components/responses/NotFoundResponse'
 *       500:
 *         $ref: '#/components/responses/InternalServerErrorResponse'
 * 
 * /payments/{id}/status:
 *   patch:
 *     summary: Update payment status
 *     tags:
 *       - Payments
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - $ref: '#/components/parameters/PaymentId'
 *     requestBody:
 *       $ref: '#/components/requestBodies/UpdatePaymentStatusRequest'
 *     responses:
 *       200:
 *         $ref: '#/components/responses/UpdatePaymentStatusResponse'
 *       401:
 *         $ref: '#/components/responses/UnauthorizedResponse'
 *       403:
 *         $ref: '#/components/responses/ForbiddenResponse'
 *       404:
 *         $ref: '#/components/responses/NotFoundResponse'
 *       500:
 *         $ref: '#/components/responses/InternalServerErrorResponse'
 */

router.get("/", authenticate, authorize(UserRole.ADMIN, UserRole.MANAGER), paymentController.getPayments);
router.get("/:id", authenticate, authorize(UserRole.ADMIN, UserRole.MANAGER), paymentController.getPayment);
router.patch("/:id/status", authenticate, authorize(UserRole.ADMIN, UserRole.MANAGER), paymentController.updateStatus);

export default router;