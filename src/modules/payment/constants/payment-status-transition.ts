import { PaymentStatus } from "@prisma/client";

export const PAYMENT_STATUS_TRANSITIONS: Record<
  PaymentStatus,
  PaymentStatus[]
> = {
  PENDING: [
    PaymentStatus.PAID,
    PaymentStatus.FAILED,
  ],

  PAID: [
    PaymentStatus.REFUNDED,
  ],

  FAILED: [
    PaymentStatus.PENDING, // Optional retry
  ],

  REFUNDED: [],
};