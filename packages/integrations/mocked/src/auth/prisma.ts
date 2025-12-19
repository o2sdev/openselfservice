import { PrismaBetterSqlite3 } from '@prisma/adapter-better-sqlite3';
import { PrismaClient } from '@prisma/client';

const globalForPrisma = globalThis as unknown as {
    prisma: PrismaClient;
};

const getDatabaseUrl = () => {
    return process.env.AUTH_DATABASE_URL || 'file:./dev.db';
};

const createAdapter = () => {
    const url = getDatabaseUrl();
    return new PrismaBetterSqlite3({ url });
};

export const prisma =
    globalForPrisma.prisma ??
    new PrismaClient({
        adapter: createAdapter(),
        log: process.env.NODE_ENV === 'development' ? ['query', 'info', 'warn', 'error'] : ['error'],
    });

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;
