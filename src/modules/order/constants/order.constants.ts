// order.constants.ts

import { OrderStatus } from "@prisma/client";

export const CANCELLABLE_ORDER_STATUSES: OrderStatus[] = [
  OrderStatus.PENDING,
  OrderStatus.CONFIRMED,
  OrderStatus.PREPARING,
];