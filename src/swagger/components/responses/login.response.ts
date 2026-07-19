export const LoginResponse = {
  description: "Login successful",

  content: {
    "application/json": {
      schema: {
        allOf: [
          {
            $ref: "#/components/schemas/ApiResponse",
          },
          {
            properties: {
              data: {
                $ref: "#/components/schemas/Login",
              },
            },
          },
        ],
      },
    },
  },
};