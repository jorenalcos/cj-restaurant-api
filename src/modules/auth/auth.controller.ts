import { Request, Response } from "express";
import authService from "./auth.service";
import { LoginDto } from "./dto/login.dto";

class AuthController {
  async login(req: Request, res: Response) {
    const dto = LoginDto.parse(req.body);

    const result = await authService.login(dto);

    return res.status(200).json({
      success: true,
      message: "Login successful.",
      data: result,
    });
  }
}

export default new AuthController();