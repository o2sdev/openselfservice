import { Auth, Users } from '@o2s/framework/modules';

const MOCK_USER_1: Users.Model.User = {
    id: 'user-100',
    username: 'john@example.com',
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
            roles: [Auth.Constants.Roles.ORG_USER, Auth.Constants.Roles.ORG_ADMIN],
        },
        {
            customer: {
                id: 'cust-002',
                name: 'Retail Customer Ltd',
                clientType: 'B2C',
            },
            roles: [Auth.Constants.Roles.ORG_USER],
        },
    ],
    customers: [],
};

const MOCK_USER_2: Users.Model.User = {
    id: 'admin-1',
    username: 'jane@example.com',
    email: 'jane@example.com',
    firstName: 'Jane',
    lastName: 'Doe',
    roles: [
        {
            customer: {
                id: 'cust-003',
                name: 'Tech Solutions Inc',
                clientType: 'B2B',
            },
            roles: [Auth.Constants.Roles.ORG_USER],
        },
        {
            customer: {
                id: 'cust-004',
                name: 'Digital Services GmbH',
                clientType: 'B2B',
            },
            roles: [Auth.Constants.Roles.ORG_USER, Auth.Constants.Roles.ORG_ADMIN],
        },
    ],
    customers: [],
};

const MOCK_USER_3: Users.Model.User = {
    id: 'user-102',
    username: 'bob.wilson@example.com',
    email: 'bob.wilson@example.com',
    firstName: 'Bob',
    lastName: 'Wilson',
    roles: [],
    customers: [],
};

const MOCK_USER_4: Users.Model.User = {
    id: 'user-101',
    username: 'lyon@example.com',
    email: 'lyon@example.com',
    firstName: 'Lyon',
    lastName: 'Gaultier',
    roles: [],
    customers: [],
};

export const MOCK_USERS = [MOCK_USER_1, MOCK_USER_2, MOCK_USER_3, MOCK_USER_4];

export const mapUser = (id?: string): Users.Model.User | undefined => {
    const users = [MOCK_USER_1, MOCK_USER_2, MOCK_USER_3, MOCK_USER_4];
    if (id) {
        return users.find((user) => user.id === id);
    }
    return MOCK_USER_2;
};

export const mapUsers = (options: Users.Request.GetUsersQuery): Users.Model.Users => {
    if (options.username) {
        const users = MOCK_USERS.filter((user) => user.username === options.username);

        return {
            data: users,
            total: users.length,
        };
    }

    return {
        data: MOCK_USERS,
        total: MOCK_USERS.length,
    };
};
