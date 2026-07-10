export const ProductSchema = {
  type: "object",
  properties: {
    id: {
      type: "integer",
      example: 1,
    },
    categoryId: {
      type: "integer",
      example: 1,
    },
    name: {
      type: "string",
      example: "Cappuccino",
    },
    description: {
      type: "string",
      example: "Fresh Arabica Coffee",
    },
    price: {
      type: "string",
      example: "180.00",
    },
    image: {
      type: "string",
      nullable: true,
    },
    rating: {
      type: "number",
      example: 5,
    },
    isAvailable: {
      type: "boolean",
      example: true,
    },
    createdAt: {
      type: "string",
      format: "date-time",
    },
    updatedAt: {
      type: "string",
      format: "date-time",
    },
    category: {
      $ref: "#/components/schemas/Category",
    },
  },
};