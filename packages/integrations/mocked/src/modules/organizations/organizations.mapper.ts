import jwt from 'jsonwebtoken';

import { Organizations } from '@o2s/framework/modules';

import { mapCustomer } from '@/modules/users/customers.mapper';
import { MOCK_USERS } from '@/modules/users/users.mapper';

// Organizations with their associated customers (using shared customer data)
const MOCK_ORGANIZATION_2: Organizations.Model.Organization = {
    id: 'org-002',
    name: 'Tech Solutions Inc',
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
    customers: [mapCustomer('cust-002')!],
};

const MOCK_ORGANIZATION_3: Organizations.Model.Organization = {
    id: 'org-003',
    name: 'Digital Services GmbH',
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
    customers: [mapCustomer('cust-003')!],
};

const MOCK_ORGANIZATION_1: Organizations.Model.Organization = {
    id: 'org-001',
    name: 'Acme Corporation',
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
    customers: [mapCustomer('cus_01KH3J08TY40PYGVEG3A04CP8R')!],
};

const MOCK_ORGANIZATIONS = [MOCK_ORGANIZATION_1, MOCK_ORGANIZATION_2, MOCK_ORGANIZATION_3];

/**
 * Get organizations filtered by the current user's membership.
 * Decodes the JWT to find the user's email and returns only organizations they belong to.
 */
export const mapOrganizationsForUser = (
    options: Organizations.Request.OrganizationsListQuery,
    authorization?: string,
): Organizations.Model.Organizations => {
    const { offset = 0, limit = 10 } = options;

    // Get organizations based on user's membership
    let userOrganizations = MOCK_ORGANIZATIONS;

    if (authorization) {
        const token = authorization.replace('Bearer ', '');
        const decoded = jwt.decode(token) as { email?: string } | null;

        if (decoded?.email) {
            // Find user by email and get their organization customer IDs
            const user = MOCK_USERS.find((u) => u.email === decoded.email);
            if (user?.customers) {
                const userCustomerIds = user.customers.map((customer) => customer.id);
                // Filter organizations that contain any of the user's customers
                userOrganizations = MOCK_ORGANIZATIONS.filter((org) =>
                    org.customers.some((customer) => userCustomerIds.includes(customer.id)),
                );
            }
        }
    }

    if (options.taxId) {
        const filtered = userOrganizations.filter((org) => org.taxId === options.taxId);
        return {
            data: filtered.slice(offset, offset + limit),
            total: filtered.length,
        };
    }

    return {
        data: userOrganizations.slice(offset, offset + limit),
        total: userOrganizations.length,
    };
};

export const mapOrganization = (id: string): Organizations.Model.Organization | undefined => {
    return MOCK_ORGANIZATIONS.find((organization) => organization.id === id);
};

export const checkMembership = (orgId: string, userId: string): boolean => {
    const org = MOCK_ORGANIZATIONS.find((organization) => organization.id === orgId);
    const user = MOCK_USERS.find((u) => u.id === userId);

    if (!org || !user) {
        return false;
    }

    // Check if user has this organization in their memberships
    const userCustomerIds = user.customers?.map((customer) => customer.id) || [];
    return org.customers.some((customer) => userCustomerIds.includes(customer.id));
};
