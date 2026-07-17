import { z } from "zod";

export const ProductIdDto = z.object({
  id: z.coerce.number().int().positive(),
});

export type ProductIdInput = z.infer<typeof ProductIdDto>;