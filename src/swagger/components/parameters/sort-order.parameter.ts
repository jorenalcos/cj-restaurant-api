export const SortOrderParameter = {
  name: "sortOrder",
  in: "query",
  description: "Sort direction",
  required: false,
  schema: {
    type: "string",
    enum: ["asc", "desc"],
    default: "desc",
  },
};