export const OrderItemSchema = {
  type: "object",
  properties: {
    id: {
      type: "integer",
      example: 1,
    },
    productId: {
      type: "integer",
      example: 1,
    },
    productName: {
      type: "string",
      example: "Cappuccino",
    },
    quantity: {
      type: "integer",
      example: 2,
    },
    unitPrice: {
      type: "number",
      example: 175,
    },
    subtotal: {
      type: "number",
      example: 350,
    },
  },
};