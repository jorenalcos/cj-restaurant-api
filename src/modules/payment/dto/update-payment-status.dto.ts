import { z } from "zod";
import { PaymentStatus } from "@prisma/client";

export const UpdatePaymentStatusDto = z.object({
  status: z.nativeEnum(PaymentStatus),
});

export type UpdatePaymentStatusInput =
  z.infer<typeof UpdatePaymentStatusDto>;