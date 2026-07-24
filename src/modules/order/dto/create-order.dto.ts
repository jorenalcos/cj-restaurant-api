import { PaymentMethod } from "@prisma/client";
import { z } from "zod";

export const CreateOrderDto = z.object({
  customerName: z
    .string()
    .trim()
    .min(2, "Customer name is required.")
    .max(100),

  phone: z
    .string()
    .trim()
    .min(10, "Phone number is required.")
    .max(20),

  address: z
    .string()
    .trim()
    .min(5, "Address is required.")
    .max(255),

  notes: z
    .string()
    .trim()
    .max(500)
    .optional(),

  paymentMethod: z.nativeEnum(PaymentMethod),

  items: z.array(
    z.object({
      productId: z.coerce.number().int().positive(),
      quantity: z.coerce.number().int().positive(),
    })
  ).min(1, "Order must contain at least one item."),
});

export type CreateOrderInput = z.infer<typeof CreateOrderDto>;