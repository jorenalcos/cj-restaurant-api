export const LoginSchema = {
  type: "object",

  properties: {
    accessToken: {
      type: "string",
      example:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    },

    user: {
      type: "object",

      properties: {
        id: {
          type: "integer",
          example: 1,
        },

        firstName: {
          type: "string",
          example: "Admin",
        },

        lastName: {
          type: "string",
          example: "Administrator",
        },

        email: {
          type: "string",
          example: "admin@cjrestaurant.com",
        },

        role: {
          type: "string",
          example: "ADMIN",
        },
      },
    },
  },
};