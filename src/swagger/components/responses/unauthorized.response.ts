export const UnauthorizedResponse = {
  description: "Unauthorized",
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
            example: "Authentication required.",
          },
        },
      },
    },
  },
};