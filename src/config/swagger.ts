import swaggerJsdoc from "swagger-jsdoc";

import {
  swaggerComponents,
  swaggerTags,
} from "../swagger";

const swaggerOptions: swaggerJsdoc.Options = {
  definition: {
    openapi: "3.0.0",

    info: {
      title: "CJ Restaurant API",
      version: "1.0.0",
      description: "Restaurant Ordering API",
    },

    servers: [
      {
        url: "http://localhost:5000/api/v1",
      },
    ],

    tags: swaggerTags,

    components: {
      securitySchemes: {
        BearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
          description: "Enter your JWT access token",
        },
      },
      ...swaggerComponents
    },
  },

  apis: ["./src/routes/**/*.ts"],
};

export const swaggerSpec = swaggerJsdoc(swaggerOptions);