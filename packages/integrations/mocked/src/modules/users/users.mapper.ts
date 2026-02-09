import { Users } from '@o2s/framework/modules';

import { mapCustomer } from './customers.mapper';

// Users belong to customers. Permissions come from the organization, not the user.
// The isAdmin flag indicates if the user has admin privileges within that organization.
const MOCK_USER_1: Users.Model.User = {
    id: 'user-100',
    username: 'john@example.com',
    email: 'john@example.com',
    firstName: 'John',
    lastName: 'Adams',
    customers: [
        mapCustomer('cust-002')!, // Tech Solutions - user permissions (view + pay)
        mapCustomer('cust-003')!, // Digital Services - readonly (view only)
    ],
};

const MOCK_USER_2: Users.Model.User = {
    id: 'admin-1',
    username: 'jane@example.com',
    email: 'jane@example.com',
    firstName: 'Jane',
    lastName: 'Doe',
    customers: [
        mapCustomer('cus_01KGSR4NSX1S7Y48E6MVWPPVDP')!, // Acme Corp - admin permissions (full access)
        mapCustomer('cust-002')!, // Tech Solutions - user permissions (view + pay)
    ],
};

const MOCK_USER_3: Users.Model.User = {
    id: 'user-102',
    username: 'bob.wilson@example.com',
    email: 'bob.wilson@example.com',
    firstName: 'Bob',
    lastName: 'Wilson',
    customers: [],
};

const MOCK_USER_4: Users.Model.User = {
    id: 'user-101',
    username: 'lyon@example.com',
    email: 'lyon@example.com',
    firstName: 'Lyon',
    lastName: 'Gaultier',
    customers: [
        mapCustomer('cust-003')!, // Digital Services - readonly (view only)
    ],
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
