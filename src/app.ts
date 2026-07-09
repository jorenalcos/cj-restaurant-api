import express from "express";
import cors from "cors";

import swaggerUi from "swagger-ui-express";
import swaggerSpec from "./config/swagger";

import healthRoutes from "./modules/health/health.routes";

const app = express();

app.use(cors());

app.use(express.json());

app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use("/api/v1/health", healthRoutes);

export default app;