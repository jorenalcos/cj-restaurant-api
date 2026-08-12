export const PaymentSummarySchema = {
  type: "object",
  properties: {
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
    transactions: {
      type: "integer",
      example: 32,
    },
    revenue: {
      type: "number",
      format: "double",
      example: 18500,
    },
  },
};