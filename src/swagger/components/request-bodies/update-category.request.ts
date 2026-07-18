export const UpdateCategoryRequest = {
  required: true,
  content: {
    "application/json": {
      schema: {
        type: "object",

        required: ["name"],

        properties: {
          name: {
            type: "string",
            example: "Premium Burgers",
          },
        },
      },
    },
  },
};