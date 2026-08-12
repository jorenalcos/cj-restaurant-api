import { z } from "zod";

export const GetSalesDto = z.object({
  period: z
    .enum(["daily", "weekly", "monthly", "yearly"])
    .optional()
    .default("daily"),
});

export type GetSalesInput = z.infer<typeof GetSalesDto>;