"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateProductDto = void 0;
const zod_1 = require("zod");
exports.CreateProductDto = zod_1.z.object({
    categoryId: zod_1.z
        .number({
        message: "Category is required",
    })
        .int()
        .positive(),
    name: zod_1.z
        .string()
        .trim()
        .min(3)
        .max(100),
    description: zod_1.z
        .string()
        .trim()
        .min(10)
        .max(1000),
    price: zod_1.z
        .number()
        .positive()
        .finite(),
    image: zod_1.z
        .string()
        .trim()
        .url("Image must be a valid URL")
        .optional()
        .nullable(),
    rating: zod_1.z
        .number()
        .min(0)
        .max(5)
        .default(5),
    isAvailable: zod_1.z
        .boolean()
        .default(true),
});
