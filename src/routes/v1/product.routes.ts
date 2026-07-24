import { Router } from "express";
import productController from "../../modules/product/controller";
import { authenticate } from "../../middleware/authenticate.middleware";
import { authorize } from "../../middleware/authorize.middleware";
import { UserRole } from "@prisma/client";

const router = Router();

/**
 * @swagger
 * /products:
 *   get:
 *     summary: Get all products
 *     tags:
 *       - Products
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       200:
 *         $ref: '#/components/responses/ProductListResponse'
 *
 *   post:
 *     summary: Create Product
 *     tags:
 *       - Products
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       $ref: '#/components/requestBodies/CreateProductRequest'
 *     responses:
 *       201:
 *         $ref: '#/components/responses/ProductResponse'
 *
 * /products/{id}:
 *   put:
 *     summary: Update Product
 *     tags:
 *       - Products
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - $ref: '#/components/parameters/ProductId'
 *     requestBody:
 *       $ref: '#/components/requestBodies/UpdateProductRequest'
 *     responses:
 *       200:
 *         $ref: '#/components/responses/ProductResponse'
 *       404:
 *         $ref: '#/components/responses/NotFoundResponse'
 *       409:
 *         $ref: '#/components/responses/ConflictResponse'
 *
 *   delete:
 *     summary: Delete Product
 *     tags:
 *       - Products
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - $ref: '#/components/parameters/ProductId'
 *     responses:
 *       200:
 *         description: Product deleted successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ApiResponse'
 *       404:
 *         $ref: '#/components/responses/NotFoundResponse'
 */

router.get("/", productController.getProducts);
router.get("/:id", productController.getProduct);
router.post("/", authenticate, authorize(UserRole.ADMIN, UserRole.MANAGER), productController.createProduct);
router.put("/:id", authenticate, authorize(UserRole.ADMIN, UserRole.MANAGER), productController.updateProduct);
router.delete("/:id", authenticate, authorize(UserRole.ADMIN), productController.deleteProduct);

export default router;