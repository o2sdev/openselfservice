import { Auth, Models } from '@o2s/framework/modules';

const MOCK_CUSTOMER_1: Models.Customer.Customer = {
    id: 'cust-001',
    name: 'Acme Corporation',
    clientType: 'B2B',
    address: {
        country: 'US',
        district: 'Manhattan',
        region: 'New York',
        streetName: 'Broadway',
        streetNumber: '350',
        apartment: 'Apt 12B',
        city: 'New York',
        postalCode: '10013',
    },
    roles: [
        {
            roles: [Auth.Constants.Roles.USER],
        },
        {
            roles: [Auth.Constants.Roles.USER, Auth.Constants.Roles.ADMIN],
        },
    ],
    parentOrgId: 'org-001',
};

const MOCK_CUSTOMER_2: Models.Customer.Customer = {
    id: 'cust-002',
    name: 'Tech Solutions Inc',
    clientType: 'B2B',
    address: {
        country: 'US',
        district: 'Brooklyn',
        region: 'New York',
        streetName: 'Bedford Ave',
        streetNumber: '127',
        apartment: 'Unit 4A',
        city: 'New York',
        postalCode: '11211',
    },
    roles: [
        {
            roles: [Auth.Constants.Roles.USER],
        },
    ],
    parentOrgId: 'org-002',
};

const MOCK_CUSTOMER_3: Models.Customer.Customer = {
    id: 'cust-003',
    name: 'Digital Services GmbH',
    clientType: 'B2C',
    address: {
        country: 'US',
        district: 'Silicon Valley',
        region: 'California',
        streetName: 'Castro Street',
        streetNumber: '221',
        apartment: 'Suite 3',
        city: 'Mountain View',
        postalCode: '94041',
    },
    roles: [
        {
            roles: [Auth.Constants.Roles.USER, Auth.Constants.Roles.ADMIN],
        },
    ],
    parentOrgId: 'org-003',
};

export const mapCustomers = (): Models.Customer.Customer[] | undefined => {
    const mocks = [MOCK_CUSTOMER_1, MOCK_CUSTOMER_2, MOCK_CUSTOMER_3];
    const count = Math.floor(Math.random() * 3) + 1;
    return mocks.slice(0, count);
};

export const mapCustomer = (id: string): Models.Customer.Customer | undefined => {
    return [MOCK_CUSTOMER_1, MOCK_CUSTOMER_2, MOCK_CUSTOMER_3].find((customer) => customer.id === id);
};
