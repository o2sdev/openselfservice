import { PrismaClient } from '@prisma/client';
import { hash } from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
    // Users no longer have roles - permissions come from their organization/customer
    // Customer permissions defined in customers.mapper.ts:
    // - cust-001 (Acme Corporation): ADMIN_PERMISSIONS (full access)
    // - cust-002 (Tech Solutions Inc): USER_PERMISSIONS (view + pay)
    // - cust-003 (Digital Services GmbH): READONLY_PERMISSIONS (view only)
    const users = [
        {
            id: 'admin-1',
            name: 'Jane Doe',
            email: 'jane@example.com',
            password: await hash('admin', 10),
            defaultCustomerId: 'cus_01KH3J08TY40PYGVEG3A04CP8R', // Acme Corp - full admin permissions
        },
        {
            id: 'user-100',
            name: 'John Adams',
            email: 'john@example.com',
            password: await hash('user', 10),
            defaultCustomerId: 'cust-002', // Tech Solutions - user permissions (view + pay)
        },
        {
            id: 'user-101',
            name: 'Lyon Gaultier',
            email: 'lyon@example.com',
            password: await hash('user', 10),
            defaultCustomerId: 'cust-003', // Digital Services - readonly permissions (view only)
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
