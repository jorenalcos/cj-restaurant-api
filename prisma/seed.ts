import { PrismaClient, UserRole } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

async function main() {
  const hashedPassword = await bcrypt.hash("admin123", 10);

  const coffee = await prisma.category.upsert({
    where: { name: "Coffee" },
    update: {},
    create: {
      name: "Coffee",
    },
  });

  const dessert = await prisma.category.upsert({
    where: { name: "Dessert" },
    update: {},
    create: {
      name: "Dessert",
    },
  });

  await prisma.product.createMany({
    data: [
      {
        name: "Cappuccino",
        description: "Fresh Arabica Coffee",
        price: 180,
        rating: 5,
        image: "/images/cappuccino.jpg",
        categoryId: coffee.id,
      },
      {
        name: "Latte",
        description: "Creamy Milk Coffee",
        price: 170,
        rating: 5,
        image: "/images/latte.jpg",
        categoryId: coffee.id,
      },
      {
        name: "Cheesecake",
        description: "New York Style",
        price: 220,
        rating: 4.8,
        image: "/images/cheesecake.jpg",
        categoryId: dessert.id,
      },
    ],
  });

  console.log("Seeding user...");

  await prisma.user.upsert({
    where: {
      email: "admin@cjrestaurant.com",
    },
    update: {},
    create: {
      firstName: "Admin",
      lastName: "Administrator",
      email: "admin@cjrestaurant.com",
      password: hashedPassword,
      role: UserRole.ADMIN,
    },
  });

  console.log("User seeded!");

  console.log("✅ Seed completed.");
}

main()
  .catch(console.error)
  .finally(async () => prisma.$disconnect());