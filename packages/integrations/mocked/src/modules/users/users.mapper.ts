import { Users } from '@o2s/framework/modules';

const dateToday = new Date();
dateToday.setHours(dateToday.getHours() - 1);
const dateYesterday = new Date();
dateYesterday.setDate(dateYesterday.getDate() - 1);

const MOCK_USER_1: Users.Model.User = {
    id: '3325325',
    email: 'john.doe@example.com',
    firstName: 'John',
    lastName: 'Doe',
    roles: [
        {
            customer: {
                id: 'CUST-001',
                name: 'Acme Corporation',
                clientType: 'B2B',
            },
            role: 'ADMIN',
        },
        {
            customer: {
                id: 'CUST-002',
                name: 'Retail Customer Ltd',
                clientType: 'B2C',
            },
            role: 'USER',
        },
    ],
    customers: [],
};

const MOCK_USER_2: Users.Model.User = {
    id: '4436436',
    email: 'jane.smith@example.com',
    firstName: 'Jane',
    lastName: 'Smith',
    roles: [
        {
            customer: {
                id: 'CUST-003',
                name: 'Tech Solutions Inc',
                clientType: 'B2B',
            },
            role: 'MANAGER',
        },
        {
            customer: {
                id: 'CUST-004',
                name: 'Digital Services GmbH',
                clientType: 'B2B',
            },
            role: 'ADMIN',
        },
    ],
    customers: [],
};

const MOCK_USER_3: Users.Model.User = {
    id: '5547547',
    email: 'bob.wilson@example.com',
    firstName: 'Bob',
    lastName: 'Wilson',
    roles: [],
    customers: [],
};

export const mapUser = (id?: string): Users.Model.User | undefined => {
    const users = [MOCK_USER_1, MOCK_USER_2, MOCK_USER_3];
    if (id) {
        return users.find((user) => user.id === id);
    }
    const randomIndex = Math.floor(Math.random() * users.length);
    return users[randomIndex];
};
