import { PrismaClient } from "@prisma/client";
import { ExcusePayload, Excuse } from "@/types";

// initialize db
const prismaClientSingleton = () => {
  return new PrismaClient();
};

declare const globalThis: {
  prismaGlobal: ReturnType<typeof prismaClientSingleton>;
} & typeof global;

export const prisma = globalThis.prismaGlobal ?? prismaClientSingleton();

if (process.env.NODE_ENV !== "production") globalThis.prismaGlobal = prisma;

// db operations
export const getAllExcuses = async () =>
  await prisma.excuse.findMany({
    orderBy: {
      http_code: "desc",
    },
  });

export const getOneExcuse = async (http_code: Excuse["http_code"]) =>
  await prisma.excuse.findUnique({ where: { http_code: Number(http_code) } });

export const createOneExcuse = async (data: ExcusePayload) =>
  await prisma.excuse.create({ data });

export const createManyExcuses = async (data: ExcusePayload[]) =>
  await prisma.excuse.createMany({ data });

export const deleteAllExcuses = async () => await prisma.excuse.deleteMany({});
