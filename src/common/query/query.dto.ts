import { z } from "zod";

export const QueryDto = z.object({
  page: z.coerce.number().min(1).default(1),
  limit: z.coerce.number().min(1).max(100).default(10),

  search: z.string().optional(),

  sortBy: z.string().optional(),
  sortOrder: z.enum(["asc", "desc"]).default("desc"),

  categoryId: z.coerce.number().optional(),
  isAvailable: z.coerce.boolean().optional(),
});

export type QueryInput = z.infer<typeof QueryDto>;