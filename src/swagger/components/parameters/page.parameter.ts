export const PageParameter = {
  name: "page",
  in: "query",
  description: "Page number",
  required: false,
  schema: {
    type: "integer",
    default: 1,
    minimum: 1,
  },
  example: 1,
};