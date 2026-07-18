import { z } from "zod";

export const CreateCategoryDto = z.object({
    name: z
        .string()
        .trim()
        .min(2, "Category name is required.")
        .max(100, "Category name is too long."),
});

export type CreateCategoryInput =
    z.infer<typeof CreateCategoryDto>;