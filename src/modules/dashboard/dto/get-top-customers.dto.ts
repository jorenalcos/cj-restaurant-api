import { z } from "zod";

export const GetTopCustomersDto = z.object({
  limit: z.coerce.number().min(1).max(50).default(10),
});

export type GetTopCustomersInput = z.infer<typeof GetTopCustomersDto>;