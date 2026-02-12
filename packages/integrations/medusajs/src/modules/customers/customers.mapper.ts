import { HttpTypes } from '@medusajs/types';

import { Customers, Models } from '@o2s/framework/modules';

export function mapCustomerAddress(
    medusaAddress: HttpTypes.StoreCustomerAddress,
    customerId: string,
): Customers.Model.CustomerAddress {
    return {
        id: medusaAddress.id,
        customerId,
        label: medusaAddress.first_name ? `${medusaAddress.first_name} ${medusaAddress.last_name}` : undefined,
        isDefault:
            (medusaAddress as unknown as Record<string, unknown>).is_default === true ||
            medusaAddress.is_default_shipping ||
            medusaAddress.is_default_billing,
        address: {
            firstName: medusaAddress.first_name,
            lastName: medusaAddress.last_name,
            country: medusaAddress.country_code || '',
            streetName: medusaAddress.address_1 || '',
            streetNumber: medusaAddress.address_2,
            city: medusaAddress.city || '',
            postalCode: medusaAddress.postal_code || '',
            region: medusaAddress.province,
            phone: medusaAddress.phone,
        } as Models.Address.Address,
        createdAt: medusaAddress.created_at || new Date().toISOString(),
        updatedAt: medusaAddress.updated_at || new Date().toISOString(),
    };
}

export function mapCustomerAddresses(
    medusaAddresses: HttpTypes.StoreCustomerAddress[],
    customerId: string,
    limit = 10,
    offset = 0,
): Customers.Model.CustomerAddresses {
    const addresses = medusaAddresses.map((addr) => mapCustomerAddress(addr, customerId));

    return {
        data: addresses.slice(offset, offset + limit),
        total: addresses.length,
    };
}

export function mapAddressToMedusa(address: Models.Address.Address): HttpTypes.StoreCreateCustomerAddress {
    return {
        first_name: (address.firstName || 'Customer').trim(),
        last_name: (address.lastName || 'Name').trim(),
        address_1: (address.streetName || '').trim(),
        address_2: (address.streetNumber || address.apartment || '').trim() || undefined,
        city: (address.city || '').trim(),
        country_code: (address.country || '').toLowerCase().trim(), // Medusa.js requires lowercase ISO country codes
        postal_code: (address.postalCode || '').trim(),
        province: address.region?.trim() || undefined,
        phone: address.phone?.trim() || undefined,
    };
}
