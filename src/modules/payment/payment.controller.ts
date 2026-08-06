import { NextFunction, Request, Response } from "express";
import { UpdatePaymentStatusDto } from "./dto/update-payment-status.dto";

import paymentService from "./payment.service";
import { PaginationDto } from "../../common/pagination/pagination.dto";

export class PaymentController {
  async getPayments(req: Request, res: Response, next: NextFunction) {
    try {
      const { page, limit } = PaginationDto.parse(req.query);
      const payments = await paymentService.getPayments(page, limit);

      return res.status(200).json({
        success: true,
        data: payments,
      });
    } catch (error) {
      next(error);
    }
  }

  async getPayment(req: Request, res: Response, next: NextFunction) {
    try {
      const id = Number(req.params.id);
      const payment = await paymentService.getPayment(id);

      return res.status(200).json({
        success: true,
        data: payment,
      });
    } catch (error) {
      next(error);
    }
  }

  async updateStatus(req: Request, res: Response, next: NextFunction) {
    try {
      const id = Number(req.params.id);
      const dto = UpdatePaymentStatusDto.parse(req.body);

      const payment = await paymentService.updatePaymentStatus(
        id,
        dto.status
      );

      return res.status(200).json({
        success: true,
        message: "Payment status updated successfully.",
        data: payment,
      });
    } catch (error) {
      next(error);
    }
  }
}

export default new PaymentController();