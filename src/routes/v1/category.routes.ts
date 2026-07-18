import { Router } from "express";
import categoryController from "../../modules/category/category.controller";

const router = Router();

/**
 * @swagger
 * /categories:
 *   post:
 *     summary: Create a category
 *     tags:
 *       - Categories
 *     requestBody:
 *       $ref: '#/components/requestBodies/CreateCategoryRequest'
 *     responses:
 *       201:
 *         $ref: '#/components/responses/CategoryResponse'
 *       409:
 *         $ref: '#/components/responses/ConflictResponse'
 *       500:
 *         description: Internal Server Error
 */

router.post("/",categoryController.createCategory);

export default router;