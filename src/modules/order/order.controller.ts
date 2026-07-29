import { NextFunction, Request, Response } from "express";

import orderService from "./order.service";
import { CreateOrderDto } from "./dto/create-order.dto";

export class OrderController {
  async createOrder(req: Request, res: Response, next: NextFunction) {
    try {
      const dto = CreateOrderDto.parse(req.body);

      const order = await orderService.createOrder(dto);

      return res.status(201).json({
        success: true,
        message: "Order created successfully.",
        data: order,
      });
    } catch (error) {
      console.log("error: ", error);
      next(error);
    }
  }

  async getOrders(req: Request, res: Response, next: NextFunction) {
    try {
      const orders = await orderService.getOrders();

      return res.status(200).json({
        success: true,
        data: orders,
      });
    } catch (error) {
      next(error);
    }
  }
}

export default new OrderController();