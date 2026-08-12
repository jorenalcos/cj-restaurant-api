import { z } from "zod";

export const GetOrderTrendsDto = z.object({
  period: z
    .enum(["daily", "weekly", "monthly", "yearly"])
    .default("daily"),
});

export type GetOrderTrendsInput = z.infer<typeof GetOrderTrendsDto>;