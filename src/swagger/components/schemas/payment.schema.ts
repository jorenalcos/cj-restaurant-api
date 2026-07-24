export const PaymentSchema = {
  type: "object",

  properties: {
    id: {
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
    },

    amount: {
      type: "number",
      format: "decimal",
      example: 998,
    },

    status: {
      type: "string",
      enum: [
        "PENDING",
        "PAID",
        "FAILED",
        "REFUNDED",
      ],
    },

    referenceNo: {
      type: "string",
      nullable: true,
      example: "GC123456789",
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
  },
};