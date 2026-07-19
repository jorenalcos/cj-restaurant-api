import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import authRepository from "./auth.repository";
import { LoginInput } from "./dto/login.dto";
import { UnauthorizedError } from "../../errors/UnauthorizedError";

class AuthService {
  async login(dto: LoginInput) {
    const user = await authRepository.findByEmail(dto.email);

    if (!user) {
      throw new UnauthorizedError("Invalid email or password.");
    }

    if (!user.isActive) {
      throw new UnauthorizedError("Your account has been disabled.");
    }

    const isPasswordValid = await bcrypt.compare(
      dto.password,
      user.password
    );

    if (!isPasswordValid) {
      throw new UnauthorizedError("Invalid email or password.");
    }

    const accessToken = jwt.sign(
      {
        id: user.id,
        email: user.email,
        role: user.role,
      },
      process.env.JWT_SECRET!,
      {
        expiresIn: process.env.JWT_EXPIRES_IN || "1d",
      }
    );

    return {
      accessToken,

      user: {
        id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        role: user.role,
      },
    };
  }
}

export default new AuthService();