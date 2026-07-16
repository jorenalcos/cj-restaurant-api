"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createProductSchema = void 0;
const zod_1 = require("zod");
exports.createProductSchema = zod_1.z.object({
    categoryId: zod_1.z.number().int().positive(),
    name: zod_1.z.string().min(3).max(100),
    description: zod_1.z.string().min(3),
    price: zod_1.z.number().positive().min(1).max(11),
    image: zod_1.z.string().trim().url("Image must be a valid URL").max(500).optional().nullable(),
    rating: zod_1.z.number().min(0).max(5).optional(),
    isAvailable: zod_1.z.boolean().optional(),
});
