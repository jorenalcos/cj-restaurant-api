export const TopCustomerSchema = {
  type: "object",
  properties: {
    customerName: {
      type: "string",
      example: "Juan Dela Cruz",
    },
    orders: {
      type: "integer",
      example: 18,
    },
    totalSpent: {
      type: "number",
      format: "double",
      example: 15800,
    },
  },
};