import { z } from "zod";

export const CreateProductDto = z.object({
    categoryId: z.number().int().positive(),

    name: z
        .string()
        .trim()
        .min(3)
        .max(100),

    description: z
        .string()
        .trim()
        .min(10)
        .max(500),

    price: z.number().positive(),

    image: z
        .string()
        .trim()
        .url()
        .nullable()
        .optional(),

    rating: z.number().min(0).max(5).default(5),

    isAvailable: z.boolean().default(true),
});

export type CreateProductInput =
    z.infer<typeof CreateProductDto>;