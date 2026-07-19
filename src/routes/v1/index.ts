import { Router } from "express";
import productRoutes from "./product.routes";
import categoryRoutes from "./category.routes";
import authRoutes from "./auth.routes";

const router = Router();

router.use("/products", productRoutes);
router.use("/categories", categoryRoutes);
router.use("/auth", authRoutes);

export default router;