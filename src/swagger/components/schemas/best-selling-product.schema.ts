export const BestSellingProductSchema = {
  type: "object",
  properties: {
    productId: {
      type: "integer",
      example: 1,
    },
    productName: {
      type: "string",
      example: "Cheese Burger",
    },
    quantitySold: {
      type: "integer",
      example: 152,
    },
    revenue: {
      type: "number",
      example: 125000,
    },
  },
};