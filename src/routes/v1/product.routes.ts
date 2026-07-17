import { Router } from "express";
import productController from "../../modules/product/controller";

const router = Router();

/**
 * @swagger
 * /products:
 *   get:
 *     summary: Get all products
 *     tags:
 *       - Products
 *     responses:
 *       200:
 *         $ref: '#/components/responses/ProductListResponse'
 *
 *   post:
 *     summary: Create Product
 *     tags:
 *       - Products
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
router.post("/", productController.createProduct);
router.put("/:id", productController.updateProduct);
router.delete("/:id", productController.deleteProduct);

export default router;