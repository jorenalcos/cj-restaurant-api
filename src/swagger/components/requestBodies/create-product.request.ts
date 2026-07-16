export const CreateProductRequest = {
  required: true,

  content: {
    "application/json": {
      schema: {
        type: "object",

        required: [
          "categoryId",
          "name",
          "description",
          "price",
        ],

        properties: {
          categoryId: {
            type: "integer",
            example: 1,
          },
          name: {
            type: "string",
            example: "Spanish Latte",
          },
          description: {
            type: "string",
            example: "Creamy Arabica Coffee",
          },
          price: {
            type: "number",
            example: 190,
          },
          image: {
            type: "string",
            example: "https://example.com/latte.jpg",
          },
          rating: {
            type: "number",
            example: 5,
          },
          isAvailable: {
            type: "boolean",
            example: true,
          },
        },
      },
    },
  },
};