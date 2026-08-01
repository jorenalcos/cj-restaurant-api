import { Prisma, PrismaClient } from "@prisma/client";
import { prisma } from "../config/prisma";

export type DatabaseClient =
  | PrismaClient
  | Prisma.TransactionClient;

export const db = prisma;