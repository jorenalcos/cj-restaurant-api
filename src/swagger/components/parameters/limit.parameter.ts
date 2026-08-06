export const LimitParameter = {
  name: "limit",
  in: "query",
  description: "Number of records per page",
  required: false,
  schema: {
    type: "integer",
    default: 10,
    minimum: 1,
    maximum: 100,
  },
  example: 10,
};