import { OrderStatus, Prisma } from "@prisma/client";
import { PaymentMethod, PaymentStatus } from "@prisma/client";

export interface CreateOrderData {
    orderNumber: string;
    customerName: string;
    phone: string;
    address: string;
    notes?: string;

    subtotal: number;
    deliveryFee: number;
    tax: number;
    discount: number;
    total: number;

    status: OrderStatus;
}

export interface CreateOrderItemData {
    productId: number;
    productName: string;
    quantity: number;
    unitPrice: Prisma.Decimal | number;
    subtotal: Prisma.Decimal | number;
}

export interface CreatePaymentData {
    method: PaymentMethod;
    amount: number;
    status: PaymentStatus;
}

export interface CreateCompleteOrderPayload {
    order: CreateOrderData;
    items: CreateOrderItemData[];
    payment: CreatePaymentData;
}