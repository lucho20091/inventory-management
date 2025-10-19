// import pkg from "../app/generated/prisma/index.js";
import pkg from "@prisma/client";
const { PrismaClient } = pkg;

const globalForPrisma = globalThis;

export const prisma = globalForPrisma.prisma ?? new PrismaClient();

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
