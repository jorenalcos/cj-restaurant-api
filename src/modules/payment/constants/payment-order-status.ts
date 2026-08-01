import { OrderStatus, PaymentStatus } from "@prisma/client";

export const PAYMENT_ORDER_STATUS: Partial<
  Record<PaymentStatus, OrderStatus>
> = {
  [PaymentStatus.PAID]: OrderStatus.CONFIRMED,

  [PaymentStatus.FAILED]: OrderStatus.PENDING,

  [PaymentStatus.REFUNDED]: OrderStatus.CANCELLED,
};