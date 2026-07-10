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

    components: swaggerComponents,
  },

  apis: ["./src/routes/**/*.ts"],
};

export const swaggerSpec = swaggerJsdoc(swaggerOptions);