import { z } from "zod";

export const CreateProductDto = z.object({
  categoryId: z
    .number({
      message: "Category is required",
    })
    .int()
    .positive(),

  name: z
    .string()
    .trim()
    .min(3)
    .max(100),

  description: z
    .string()
    .trim()
    .min(10)
    .max(1000),

  price: z
    .number()
    .positive()
    .finite(),

  image: z
    .string()
    .trim()
    .url("Image must be a valid URL")
    .optional()
    .nullable(),

  rating: z
    .number()
    .min(0)
    .max(5)
    .default(5),

  isAvailable: z
    .boolean()
    .default(true),
});

export type CreateProductInput = z.infer<typeof CreateProductDto>;