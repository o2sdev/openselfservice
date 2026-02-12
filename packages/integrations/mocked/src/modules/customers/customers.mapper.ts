import { Customers } from '@o2s/framework/modules';

export function mapCustomerAddresses(
    addresses: Customers.Model.CustomerAddress[],
    limit = 10,
    offset = 0,
): Customers.Model.CustomerAddresses {
    const total = addresses.length;
    const paginatedAddresses = addresses.slice(offset, offset + limit);

    return {
        data: paginatedAddresses,
        total,
    };
}

export function mapCustomerAddress(
    address: Customers.Model.CustomerAddress | undefined,
): Customers.Model.CustomerAddress | undefined {
    return address;
}

export function createCustomerAddress(
    data: Customers.Request.CreateAddressBody,
    customerId: string,
): Customers.Model.CustomerAddress {
    const now = new Date().toISOString();
    const id = `addr-${Date.now()}`;

    return {
        id,
        customerId,
        label: data.label,
        isDefault: data.isDefault ?? false,
        address: data.address,
        createdAt: now,
        updatedAt: now,
    };
}

export function updateCustomerAddress(
    existing: Customers.Model.CustomerAddress,
    data: Customers.Request.UpdateAddressBody,
): Customers.Model.CustomerAddress {
    return {
        ...existing,
        label: data.label ?? existing.label,
        isDefault: data.isDefault ?? existing.isDefault,
        address: data.address ?? existing.address,
        updatedAt: new Date().toISOString(),
    };
}
