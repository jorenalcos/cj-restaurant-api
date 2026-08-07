export const SortByParameter = {
  name: "sortBy",
  in: "query",
  description: "Field to sort by",
  required: false,
  schema: {
    type: "string",
  },
  example: "createdAt",
};