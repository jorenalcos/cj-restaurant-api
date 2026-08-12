import { OrderStatus } from "@prisma/client";
import { GetSalesInput } from "./dto/get-sales.dto";
import dashboardRepository from "./dashboard.repository";
import { GetBestSellingInput } from "./dto/get-best-selling.dto";
import { GetOrderTrendsInput } from "./dto/get-order-trends.dto";
import { GetTopCustomersInput } from "./dto/get-top-customers.dto";

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

    const strategies = {
      daily: () => dashboardRepository.getDailyOrderTrends(),
      weekly: () => dashboardRepository.getWeeklyOrderTrends(),
      monthly: () => dashboardRepository.getMonthlyOrderTrends(),
      yearly: () => dashboardRepository.getYearlyOrderTrends(),
    };
    const trends = await strategies[dto.period]();

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

  async getTopCustomers(dto: GetTopCustomersInput) {
    const customers = await dashboardRepository.getTopCustomers(dto.limit);

    return customers.map((customer) => ({
      customerName: customer.customerName,
      orders: Number(customer.orders),
      totalSpent: Number(customer.totalSpent),
    }));
  }

  async getPaymentSummary() {
    const summary = await dashboardRepository.getPaymentSummary();

    return summary.map((item) => ({
      method: item.method,
      transactions: Number(item.transactions),
      revenue: Number(item.revenue),
    }));
  }
}

export default new DashboardService();