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
 */

router.get("/", productController.getProducts);
router.get("/:id", productController.getProduct);
router.post("/", productController.createProduct);

export default router;