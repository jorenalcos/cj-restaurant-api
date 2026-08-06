import { NextFunction, Request, Response } from "express";

import orderService from "./order.service";
import { CreateOrderDto } from "./dto/create-order.dto";
import { UpdateOrderStatusDto } from "./dto/update-order-status.dto";
import { PaginationDto } from "../../common/pagination/pagination.dto";

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
      const { page, limit } = PaginationDto.parse(req.query);
      const orders = await orderService.getOrders(page, limit);

      return res.status(200).json({
        success: true,
        data: orders,
      });
    } catch (error) {
      next(error);
    }
  }

  async getOrder(req: Request, res: Response, next: NextFunction) {
    try {
      const id = Number(req.params.id);

      const order = await orderService.getOrder(id);

      return res.status(200).json({
        success: true,
        data: order,
      });
    } catch (error) {
      next(error);
    }
  }

  async updateStatus(req: Request, res: Response, next: NextFunction) {
    try {
      const id = Number(req.params.id);
      const dto = UpdateOrderStatusDto.parse(req.body);
      const order = await orderService.updateOrderStatus(id, dto.status);

      return res.status(200).json({
        success: true,
        message: "Order status updated successfully.",
        data: order,
      });
    } catch (error) {
      next(error);
    }
  }

  async cancelOrder(req: Request, res: Response, next: NextFunction) {
    try {
      const id = Number(req.params.id);
      const order = await orderService.cancelOrder(id);

      return res.status(200).json({
        success: true,
        message: "Order cancelled successfully.",
        data: order,
      });
    } catch (error) {
      next(error);
    }
  }
}

export default new OrderController();