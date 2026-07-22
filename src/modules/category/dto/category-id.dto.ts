import { z } from "zod";

export const CategoryIdDto = z.object({
  id: z.coerce
    .number()
    .int()
    .positive("Category ID must be a positive integer."),
});

export type CategoryIdInput = z.infer<typeof CategoryIdDto>;