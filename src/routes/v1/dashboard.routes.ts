import { Router } from "express";

import dashboardController from "../../modules/dashboard/dashboard.controller";
import { authenticate } from "../../middleware/authenticate.middleware";
import { authorize } from "../../middleware/authorize.middleware";
import { UserRole } from "@prisma/client";

const router = Router();

/**
 * @swagger
 * /dashboard/statistics:
 *   get:
 *     summary: Get dashboard statistics
 *     description: Retrieve overall dashboard statistics including products, categories, orders, and sales.
 *     tags:
 *       - Dashboard
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       200:
 *         $ref: '#/components/responses/DashboardStatisticsResponse'
 *       401:
 *         $ref: '#/components/responses/UnauthorizedResponse'
 *       403:
 *         $ref: '#/components/responses/ForbiddenResponse'
 * 
 * /dashboard/sales:
 *   get:
 *     summary: Get sales analytics
 *     description: Retrieve sales analytics grouped by period.
 *     tags:
 *       - Dashboard
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: query
 *         name: period
 *         schema:
 *           type: string
 *           enum:
 *             - daily
 *             - weekly
 *             - monthly
 *             - yearly
 *         required: false
 *         description: Sales aggregation period.
 *     responses:
 *       200:
 *         $ref: '#/components/responses/SalesAnalyticsResponse'
 *       401:
 *         $ref: '#/components/responses/UnauthorizedResponse'
 *       403:
 *         $ref: '#/components/responses/ForbiddenResponse'
 * 
 * /dashboard/best-selling:
 *   get:
 *     summary: Get best selling products
 *     description: Retrieve the top selling products based on quantity sold.
 *     tags:
 *       - Dashboard
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           default: 5
 *           minimum: 1
 *           maximum: 20
 *         required: false
 *         description: Number of top selling products to return.
 *     responses:
 *       200:
 *         $ref: '#/components/responses/BestSellingProductsResponse'
 *       401:
 *         $ref: '#/components/responses/UnauthorizedResponse'
 *       403:
 *         $ref: '#/components/responses/ForbiddenResponse'
 * 
 * /dashboard/order-trends:
 *   get:
 *     summary: Get order trends
 *     description: Retrieve order counts grouped by period and status.
 *     tags:
 *       - Dashboard
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: query
 *         name: period
 *         schema:
 *           type: string
 *           enum:
 *             - daily
 *             - weekly
 *             - monthly
 *             - yearly
 *         required: false
 *         description: Aggregation period.
 *     responses:
 *       200:
 *         $ref: '#/components/responses/OrderTrendsResponse'
 *       401:
 *         $ref: '#/components/responses/UnauthorizedResponse'
 *       403:
 *         $ref: '#/components/responses/ForbiddenResponse'
 */

router.get("/statistics", authenticate, authorize(UserRole.ADMIN, UserRole.MANAGER), dashboardController.getStatistics);
router.get("/sales", authenticate, authorize(UserRole.ADMIN, UserRole.MANAGER), dashboardController.getSalesAnalytics);
router.get("/best-selling", authenticate, authorize(UserRole.ADMIN, UserRole.MANAGER), dashboardController.getBestSellingProducts);
router.get("/order-trends", authenticate, authorize(UserRole.ADMIN, UserRole.MANAGER), dashboardController.getOrderTrends);

export default router;