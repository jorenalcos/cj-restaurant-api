import { z } from "zod";
import { OrderStatus } from "@prisma/client";

export const UpdateOrderStatusDto = z.object({
  status: z.nativeEnum(OrderStatus),
});

export type UpdateOrderStatusInput =
  z.infer<typeof UpdateOrderStatusDto>;