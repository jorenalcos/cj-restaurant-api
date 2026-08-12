import { z } from "zod";

export const GetBestSellingDto = z.object({
  limit: z.coerce.number().min(1).max(20).default(5),
});

export type GetBestSellingInput = z.infer<typeof GetBestSellingDto>;