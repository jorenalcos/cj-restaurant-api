export const ProductIdParameter = {
  name: "id",

  in: "path",

  required: true,

  description: "Product ID",

  schema: {
    type: "integer",
    example: 1,
  },
};