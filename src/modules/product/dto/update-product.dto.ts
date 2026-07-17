import z from "zod";
import { CreateProductDto } from "./create-product.dto";

export const UpdateProductDto = CreateProductDto;

export type UpdateProductInput =
    z.infer<typeof UpdateProductDto>;