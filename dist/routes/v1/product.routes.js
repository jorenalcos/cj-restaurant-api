"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controller_1 = __importDefault(require("../../modules/product/controller"));
const router = (0, express_1.Router)();
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
 *       400:
 *         description: Validation Error
 *
 * /products/{id}:
 *   get:
 *     summary: Get Product by ID
 *     description: Retrieve a single product using its unique ID.
 *     tags:
 *       - Products
 *     parameters:
 *       - $ref: '#/components/parameters/ProductId'
 *     responses:
 *       200:
 *         $ref: '#/components/responses/ProductResponse'
 *       404:
 *         $ref: '#/components/responses/NotFoundResponse'
 */
router.get("/", controller_1.default.getProducts);
router.get("/:id", controller_1.default.getProduct);
router.post("/", controller_1.default.create);
exports.default = router;
