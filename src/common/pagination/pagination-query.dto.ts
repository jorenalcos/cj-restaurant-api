import { z } from "zod";

export const PaginationQueryDto = z.object({
  page: z.coerce.number().int().min(1).default(1),

  limit: z.coerce.number().int().min(1).max(100).default(10),

  search: z.string().optional(),

  sort: z.string().optional(),

  order: z.enum(["asc", "desc"]).default("desc"),
});

export type PaginationQueryInput =
  z.infer<typeof PaginationQueryDto>;