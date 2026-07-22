export const ForbiddenResponse = {
  description: "Forbidden",
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
            example: "You do not have permission to perform this action.",
          },
        },
      },
    },
  },
};