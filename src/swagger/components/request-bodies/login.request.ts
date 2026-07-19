export const LoginRequest = {
  required: true,

  content: {
    "application/json": {
      schema: {
        type: "object",

        required: ["email", "password"],

        properties: {
          email: {
            type: "string",
            example: "admin@cjrestaurant.com",
          },

          password: {
            type: "string",
            example: "admin123",
          },
        },
      },
    },
  },
};