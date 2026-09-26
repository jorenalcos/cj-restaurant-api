import express from "express";
import swaggerUi from "swagger-ui-express";

import routes from "./routes/v1";

import { swaggerSpec } from "./config/swagger";

import { loggerMiddleware } from "./middleware/logger.middleware";
import { notFoundMiddleware } from "./middleware/notFound.middleware";
import { errorMiddleware } from "./middleware/error.middleware";
import { helmetMiddleware } from "./config/security";
import { apiRateLimiter } from "./middleware/rate-limit.middleware";
import { corsMiddleware } from "./config/cors";

const app = express();

app.set("trust proxy", 1);

app.use(helmetMiddleware);
app.use(corsMiddleware);
app.use(express.json({ limit: "1mb", }));
app.use(loggerMiddleware);

app.use(
  "/docs",
  swaggerUi.serve,
  swaggerUi.setup(swaggerSpec)
);

app.use("/api/v1/", routes);

app.use(notFoundMiddleware);

app.use(errorMiddleware);

export default app;