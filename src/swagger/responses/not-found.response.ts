export const NotFoundResponse = {
  description: "Resource not found.",
  content: {
    "application/json": {
      schema: {
        type: "object",
        properties: {
          success: {
            type: "boolean",
            example: false,
          },
          message: {
            type: "string",
            example: "Category not found.",
          },
        },
      },
    },
  },
};