import { OrderStatus } from "@prisma/client";
import { GetSalesInput } from "./dto/get-sales.dto";
import dashboardRepository from "./dashboard.repository";
import { GetBestSellingInput } from "./dto/get-best-selling.dto";
import { GetOrderTrendsInput } from "./dto/get-order-trends.dto";

export class DashboardService {
  async getStatistics() {
    const [
      totalProducts,
      totalCategories,
      totalOrders,
      pendingOrders,
      completedOrders,
      cancelledOrders,
      todaySales,
      monthlySales,
      totalRevenue,
    ] = await Promise.all([
      dashboardRepository.countProducts(),
      dashboardRepository.countCategories(),
      dashboardRepository.countOrders(),
      dashboardRepository.countOrdersByStatus(OrderStatus.PENDING),
      dashboardRepository.countOrdersByStatus(OrderStatus.DELIVERED),
      dashboardRepository.countOrdersByStatus(OrderStatus.CANCELLED),
      dashboardRepository.getTodaySales(),
      dashboardRepository.getMonthlySales(),
      dashboardRepository.getTotalRevenue(),
    ]);

    return {
      totalProducts,
      totalCategories,
      totalOrders,

      pendingOrders,
      completedOrders,
      cancelledOrders,

      todaySales,
      monthlySales,
      totalRevenue,
    };
  }

  async getSalesAnalytics(dto: GetSalesInput) {
    const strategies = {
      daily: () => dashboardRepository.getDailySalesAnalytics(),
      weekly: () => dashboardRepository.getWeeklySalesAnalytics(),
      monthly: () => dashboardRepository.getMonthlySalesAnalytics(),
      yearly: () => dashboardRepository.getYearlySalesAnalytics(),
    };
    const sales = await strategies[dto.period]();

    return sales.map((item) => ({
      label: item.label,
      sales: Number(item.sales),
    }));
  }

  async getBestSellingProducts(dto: GetBestSellingInput) {
    const products = await dashboardRepository.getBestSellingProducts(dto.limit);

    return products.map((product) => ({
      productId: product.productId,
      productName: product.productName,
      quantitySold: Number(product.quantitySold),
      revenue: Number(product.revenue),
    }));
  }

  async getOrderTrends(dto: GetOrderTrendsInput) {
    let trends;

    switch (dto.period) {
      case "daily":
        trends = await dashboardRepository.getDailyOrderTrends();
        break;

      case "weekly":
        trends = await dashboardRepository.getWeeklyOrderTrends();
        break;

      case "monthly":
        trends = await dashboardRepository.getMonthlyOrderTrends();
        break;

      case "yearly":
        trends = await dashboardRepository.getYearlyOrderTrends();
        break;
    }

    return trends.map((trend) => ({
      label: trend.label,

      pending: Number(trend.pending),
      confirmed: Number(trend.confirmed),
      preparing: Number(trend.preparing),
      ready: Number(trend.ready),
      outForDelivery: Number(trend.outForDelivery),
      delivered: Number(trend.delivered),
      cancelled: Number(trend.cancelled),
    }));
  }
}

export default new DashboardService();