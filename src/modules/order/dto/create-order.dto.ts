import { PaymentMethod } from "@prisma/client";
import { z } from "zod";

export const CreateOrderDto = z.object({
  paymentMethod: z.nativeEnum(PaymentMethod),

  items: z.array(
    z.object({
      productId: z.coerce.number().int().positive(),
      quantity: z.coerce.number().int().positive(),
    })
  ).min(1, "Order must contain at least one item."),
});

export type CreateOrderInput = z.infer<typeof CreateOrderDto>;