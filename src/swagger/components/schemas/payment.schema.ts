export const PaymentSchema = {
  type: "object",
  properties: {
    id: {
      type: "integer",
      example: 1,
    },
    orderId: {
      type: "integer",
      example: 1,
    },
    method: {
      type: "string",
      enum: [
        "CASH",
        "CASH_ON_DELIVERY",
        "GCASH",
        "MAYA",
        "CARD",
      ],
      example: "GCASH",
    },
    amount: {
      type: "number",
      example: 599.99,
    },
    status: {
      type: "string",
      enum: [
        "PENDING",
        "PAID",
        "FAILED",
        "REFUNDED",
      ],
      example: "PENDING",
    },
    referenceNo: {
      type: "string",
      nullable: true,
      example: "GCASH-123456789",
    },
    paidAt: {
      type: "string",
      format: "date-time",
      nullable: true,
    },
    createdAt: {
      type: "string",
      format: "date-time",
    },
    order: {
      $ref: "#/components/schemas/Order",
    },
  },
};