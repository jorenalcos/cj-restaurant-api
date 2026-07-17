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
 *         description: Product created successfully
 *         $ref: '#/components/responses/ProductResponse'
 * /products/{id}:
 *   put:
 *     summary: Update a product
 *     tags: [Products]
 *     parameters:
 *       - $ref: '#/components/parameters/ProductId'
 *     requestBody:
 *       $ref: '#/components/requestBodies/UpdateProductRequest'
 *     responses:
 *       200:
 *         description: Product updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ProductResponse'
 *
 *       404:
 *         $ref: '#/components/responses/NotFoundResponse'
 *
 *       409:
 *         description: Product already exists
 *
 *       500:
 *         description: Internal Server Error
 */

router.get("/", productController.getProducts);
router.get("/:id", productController.getProduct);
router.post("/", productController.createProduct);
router.put("/:id", productController.updateProduct);

export default router;