import { PrismaClient, Role } from '@prisma/client';
import { hash } from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
    const users = [
        {
            id: 'admin-1',
            name: 'Jane Doe',
            email: 'jane@example.com',
            password: await hash('admin', 10),
            role: Role.selfservice_admin,
            defaultCustomerId: 'cust-001',
        },
        {
            id: 'user-100',
            name: 'John Adams',
            email: 'john@example.com',
            password: await hash('user', 10),
            role: Role.selfservice_user,
        },
        {
            id: 'user-101',
            name: 'Lyon Gaultier',
            email: 'lyon@example.com',
            password: await hash('user', 10),
            role: Role.selfservice_user,
        },
    ];

    for (const user of users) {
        await prisma.user.upsert({
            where: { email: user.email },
            update: {},
            create: user,
        });
    }
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
