import { Customers, Models } from '@o2s/framework/modules';

const MOCK_ADDRESSES: Customers.Model.CustomerAddress[] = [
    {
        id: 'addr-001',
        customerId: 'customer-001',
        label: 'Home',
        isDefault: true,
        address: {
            country: 'US',
            streetName: 'Main Street',
            streetNumber: '123',
            apartment: 'Apt 4B',
            city: 'New York',
            postalCode: '10001',
            email: 'customer@example.com',
            phone: '+1-555-0100',
        } as Models.Address.Address,
        createdAt: '2024-01-15T10:00:00Z',
        updatedAt: '2024-01-15T10:00:00Z',
    },
    {
        id: 'addr-002',
        customerId: 'customer-001',
        label: 'Work',
        isDefault: false,
        address: {
            country: 'US',
            streetName: 'Business Avenue',
            streetNumber: '456',
            city: 'New York',
            postalCode: '10002',
            email: 'customer@example.com',
            phone: '+1-555-0101',
        } as Models.Address.Address,
        createdAt: '2024-02-01T10:00:00Z',
        updatedAt: '2024-02-01T10:00:00Z',
    },
    {
        id: 'addr-003',
        customerId: 'customer-002',
        label: 'Home',
        isDefault: true,
        address: {
            country: 'CA',
            streetName: 'Maple Drive',
            streetNumber: '789',
            city: 'Toronto',
            postalCode: 'M5H 2N2',
            email: 'customer2@example.com',
            phone: '+1-416-555-0102',
        } as Models.Address.Address,
        createdAt: '2024-01-20T10:00:00Z',
        updatedAt: '2024-01-20T10:00:00Z',
    },
];

export function getMockAddresses(): Customers.Model.CustomerAddress[] {
    return MOCK_ADDRESSES;
}

export function getMockAddressById(id: string): Customers.Model.CustomerAddress | undefined {
    return MOCK_ADDRESSES.find((addr) => addr.id === id);
}

export function getMockAddressesByCustomerId(customerId: string): Customers.Model.CustomerAddress[] {
    return MOCK_ADDRESSES.filter((addr) => addr.customerId === customerId);
}
