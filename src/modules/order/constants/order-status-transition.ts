import { OrderStatus } from "@prisma/client";

export const ORDER_STATUS_TRANSITIONS: Record<OrderStatus, OrderStatus[]> = {
  PENDING: [
    OrderStatus.CONFIRMED,
  ],

  CONFIRMED: [
    OrderStatus.PREPARING,
  ],

  PREPARING: [
    OrderStatus.READY,
  ],

  READY: [
    OrderStatus.OUT_FOR_DELIVERY,
  ],

  OUT_FOR_DELIVERY: [
    OrderStatus.DELIVERED,
  ],

  DELIVERED: [],

  CANCELLED: [],
};