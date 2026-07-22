import { Router } from "express";
import categoryController from "../../modules/category/category.controller";
import { authenticate } from "../../middleware/authenticate.middleware";
import { authorize } from "../../middleware/authorize.middleware";
import { UserRole } from "@prisma/client";

const router = Router();

/**
 * @swagger
 * /categories:
 *   post:
 *     summary: Create a category
 *     tags:
 *       - Categories
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       $ref: '#/components/requestBodies/CreateCategoryRequest'
 *     responses:
 *       201:
 *         $ref: '#/components/responses/CategoryResponse'
 *       409:
 *         $ref: '#/components/responses/ConflictResponse'
 *       500:
 *         description: Internal Server Error
 *
 *   get:
 *     summary: Get all categories
 *     tags:
 *       - Categories
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       200:
 *         $ref: '#/components/responses/CategoryListResponse'
 *
 * /categories/{id}:
 *   get:
 *     summary: Get Category by ID
 *     tags:
 *       - Categories
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - $ref: '#/components/parameters/CategoryId'
 *     responses:
 *       200:
 *         $ref: '#/components/responses/CategoryResponse'
 *       404:
 *         $ref: '#/components/responses/NotFoundResponse'
 * 
 *   put:
 *     summary: Update category
 *     tags:
 *       - Categories
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - $ref: '#/components/parameters/CategoryId'
 *     requestBody:
 *       $ref: '#/components/requestBodies/UpdateCategoryRequest'
 *     responses:
 *       200:
 *         $ref: '#/components/responses/CategoryResponse'
 *       404:
 *         $ref: '#/components/responses/NotFoundResponse'
 *       409:
 *         $ref: '#/components/responses/ConflictResponse'
 * 
 *   delete:
 *     summary: Delete category
 *     tags:
 *       - Categories
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - $ref: '#/components/parameters/CategoryId'
 *     responses:
 *       200:
 *         description: Category deleted successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: Category deleted successfully.
 *       404:
 *         $ref: '#/components/responses/NotFoundResponse'
 *       409:
 *         $ref: '#/components/responses/ConflictResponse'
 *       401:
 *         $ref: '#/components/responses/UnauthorizedResponse'
 *       403:
 *         $ref: '#/components/responses/ForbiddenResponse'
 */

router.post("/", authenticate, authorize(UserRole.ADMIN, UserRole.MANAGER), categoryController.createCategory);
router.put("/:id", authenticate, authorize(UserRole.ADMIN, UserRole.MANAGER), categoryController.updateCategory);
router.get("/", categoryController.getCategories);
router.get("/:id", categoryController.getCategory);
router.delete("/:id", authenticate, authorize(UserRole.ADMIN), categoryController.deleteCategory);

export default router;