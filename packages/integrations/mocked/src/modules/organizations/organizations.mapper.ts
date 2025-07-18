import { Models, Organizations } from '@o2s/framework/modules';

import { MOCK_USERS } from '@/modules/users/users.mapper';

const MOCK_CUSTOMERS: Models.Customer.Customer[] = [
    {
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
    },
    {
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
    },
    {
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
    },
];

const MOCK_ORGANIZATION_2: Organizations.Model.Organization = {
    id: 'org-002',
    name: 'Acme East Coast Division',
    taxId: '12-3456789',
    address: {
        country: 'US',
        district: 'Brooklyn',
        region: 'New York',
        streetName: '456 Atlantic Ave',
        streetNumber: '78',
        apartment: 'Floor 3',
        city: 'New York',
        postalCode: '11201',
        email: 'eastcoast@mockorg1.com',
        phone: '+1-212-555-0124',
    },
    isActive: true,
    children: [],
    customers: [MOCK_CUSTOMERS[1]!],
};

const MOCK_ORGANIZATION_3: Organizations.Model.Organization = {
    id: 'org-003',
    name: 'Acme West Coast Division',
    taxId: '98-7654321',
    address: {
        country: 'US',
        district: 'Silicon Valley',
        region: 'California',
        streetName: 'Technology Drive',
        streetNumber: '789',
        apartment: 'Building B',
        city: 'San Jose',
        postalCode: '95110',
        email: 'westcoast@mockorg1.com',
        phone: '+1-408-555-0125',
    },
    isActive: true,
    children: [],
    customers: [MOCK_CUSTOMERS[2]!],
};

const MOCK_ORGANIZATION_1: Organizations.Model.Organization = {
    id: 'org-001',
    name: 'Acme Global Solutions',
    taxId: '56-4738291',
    address: {
        country: 'US',
        district: 'Manhattan',
        region: 'New York',
        streetName: '123 Main St',
        streetNumber: '45',
        apartment: 'Suite 500',
        city: 'New York',
        postalCode: '10001',
        email: 'contact@mockorg1.com',
        phone: '+1-212-555-0123',
    },
    isActive: true,
    children: [MOCK_ORGANIZATION_2, MOCK_ORGANIZATION_3],
    customers: [MOCK_CUSTOMERS[0]!],
};

const MOCK_ORGANIZATIONS = [MOCK_ORGANIZATION_1, MOCK_ORGANIZATION_2, MOCK_ORGANIZATION_3];

export const mapOrganizations = (
    options: Organizations.Request.OrganizationsListQuery,
): Organizations.Model.Organizations => {
    const { offset = 0, limit = 10 } = options;

    if (options.taxId) {
        const organizations = MOCK_ORGANIZATIONS.filter((org) => org.taxId === options.taxId);

        return {
            data: organizations.slice(offset, offset + limit),
            total: organizations.length,
        };
    }

    return {
        data: MOCK_ORGANIZATIONS.slice(offset, offset + limit),
        total: MOCK_ORGANIZATIONS.length,
    };
};

export const mapOrganization = (id: string): Organizations.Model.Organization | undefined => {
    return MOCK_ORGANIZATIONS.find((organization) => organization.id === id);
};

export const checkMembership = (orgId: string, userId: string): boolean => {
    const org = MOCK_ORGANIZATIONS.find((organization) => organization.id === orgId);
    const user = MOCK_USERS.find((user) => user.id === userId);

    return !!org && !!user;
};
