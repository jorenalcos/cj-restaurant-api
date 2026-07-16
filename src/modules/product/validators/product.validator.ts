import { z } from "zod";

export const createProductSchema = z.object({
  categoryId: z.number().int().positive(),
  name: z.string().min(3).max(100),
  description: z.string().min(3),
  price: z.number().positive().min(1).max(11),
  image: z.string().trim().url("Image must be a valid URL").max(500).optional().nullable(),
  rating: z.number().min(0).max(5).optional(),
  isAvailable: z.boolean().optional(),
});

export type CreateProductDto = z.infer<typeof createProductSchema>;