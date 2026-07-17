import { prisma } from "../../config/prisma.config";

class CategoryRepository {
     async findById(id: number) {
        return prisma.category.findUnique({
            where: {
                id,
            },
        });
    }
}

export default new CategoryRepository();