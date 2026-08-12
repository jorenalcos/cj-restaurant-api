import { NextFunction, Request, Response } from "express";
import dashboardService from "./dashboard.service";
import { GetSalesDto } from "./dto/get-sales.dto";
import { GetBestSellingDto } from "./dto/get-best-selling.dto";
import { GetOrderTrendsDto } from "./dto/get-order-trends.dto";

export class DashboardController {
  async getStatistics(req: Request, res: Response, next: NextFunction) {
    try {
      const statistics = await dashboardService.getStatistics();

      return res.status(200).json({
        success: true,
        message: "Dashboard statistics retrieved successfully.",
        data: statistics,
      });
    } catch (error) {
      next(error);
    }
  }

  async getSalesAnalytics(req: Request, res: Response, next: NextFunction) {
    try {
      const dto = GetSalesDto.parse(req.query);

      const sales = await dashboardService.getSalesAnalytics(dto);

      return res.status(200).json({
        success: true,
        message: "Sales analytics retrieved successfully.",
        data: sales,
      });
    } catch (error) {
      console.log("error: ", error);
      next(error);
    }
  }

  async getBestSellingProducts(req: Request, res: Response, next: NextFunction) {
    try {
      const dto = GetBestSellingDto.parse(req.query);

      const products =
        await dashboardService.getBestSellingProducts(dto);

      return res.status(200).json({
        success: true,
        message: "Best selling products retrieved successfully.",
        data: products,
      });
    } catch (error) {
      next(error);
    }
  }

  async getOrderTrends(req: Request, res: Response, next: NextFunction) {
    try {
      const dto = GetOrderTrendsDto.parse(req.query);

      const trends =
        await dashboardService.getOrderTrends(dto);

      return res.status(200).json({
        success: true,
        message: "Order trends retrieved successfully.",
        data: trends,
      });
    } catch (error) {
      next(error);
    }
  }
}

export default new DashboardController();