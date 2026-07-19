import prisma from "../../config/prisma";

class AuthRepository {
  async findByEmail(email: string) {
    return prisma.user.findFirst({
      where: {
        email,
        deletedAt: null,
      },
    });
  }
}

export default new AuthRepository();