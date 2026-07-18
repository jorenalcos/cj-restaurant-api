export const CategoryIdParameter = {
  name: "id",
  in: "path",
  required: true,
  schema: {
    type: "integer",
  },

  example: 1,
  description: "Category ID",
};