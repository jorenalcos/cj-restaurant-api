export const CreateOrderItemSchema = {
  type: "object",
  required: ["productId", "quantity"],
  properties: {
    productId: {
      type: "integer",
      example: 1,
    },
    quantity: {
      type: "integer",
      example: 2,
    },
  },
};