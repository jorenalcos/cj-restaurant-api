// api-response.schema.ts

export const ApiResponseSchema = {
  type: "object",
  properties: {
    success: {
      type: "boolean",
      example: true,
    },
    message: {
      type: "string",
      example: "Success",
    },
    data: {
      type: "object",
    },
  },
};