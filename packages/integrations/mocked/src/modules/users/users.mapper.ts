import { Users } from '@o2s/framework/modules';

const dateToday = new Date();
dateToday.setHours(dateToday.getHours() - 1);
const dateYesterday = new Date();
dateYesterday.setDate(dateYesterday.getDate() - 1);

const MOCK_USER_1: Users.Model.User = {
    id: 'user-100',
    email: 'john@example.com',
    firstName: 'John',
    lastName: 'Adams',
    roles: [
        {
            customer: {
                id: 'cust-001',
                name: 'Acme Corporation',
                clientType: 'B2B',
            },
            role: 'selfservice_admin',
        },
        {
            customer: {
                id: 'cust-002',
                name: 'Retail Customer Ltd',
                clientType: 'B2C',
            },
            role: 'selfservice_user',
        },
    ],
    customers: [],
};

const MOCK_USER_2: Users.Model.User = {
    id: 'admin-1',
    email: 'jane@example.com',
    firstName: 'Jane',
    lastName: 'Doe',
    roles: [
        {
            customer: {
                id: 'cust-002',
                name: 'Tech Solutions Inc',
                clientType: 'B2B',
            },
            role: 'selfservice_manager',
        },
        {
            customer: {
                id: 'cust-003',
                name: 'Digital Services GmbH',
                clientType: 'B2B',
            },
            role: 'selfservice_admin',
        },
    ],
    customers: [],
};

const MOCK_USER_3: Users.Model.User = {
    id: 'user-102',
    email: 'bob.wilson@example.com',
    firstName: 'Bob',
    lastName: 'Wilson',
    roles: [],
    customers: [],
};

const MOCK_USER_4: Users.Model.User = {
    id: 'user-101',
    email: 'lyon@example.com',
    firstName: 'Lyon',
    lastName: 'Gaultier',
    roles: [],
    customers: [],
};

export const mapUser = (id?: string): Users.Model.User | undefined => {
    const users = [MOCK_USER_1, MOCK_USER_2, MOCK_USER_3, MOCK_USER_4];
    if (id) {
        return users.find((user) => user.id === id);
    }
    const randomIndex = Math.floor(Math.random() * users.length);
    return users[randomIndex];
};
