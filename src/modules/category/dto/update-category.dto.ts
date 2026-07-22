import { z } from "zod";

export const UpdateCategoryDto = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Category name must be at least 2 characters.")
    .max(100),

  description: z
    .string()
    .trim()
    .max(255)
    .optional(),
});

export type UpdateCategoryInput = z.infer<typeof UpdateCategoryDto>;