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
        isDefault: medusaAddress.is_default_shipping || medusaAddress.is_default_billing,
        address: {
            firstName: medusaAddress.first_name ?? undefined,
            lastName: medusaAddress.last_name ?? undefined,
            country: medusaAddress.country_code?.toUpperCase() || '',
            streetName: medusaAddress.address_1 || '',
            streetNumber: medusaAddress.address_2 ?? undefined,
            city: medusaAddress.city || '',
            postalCode: medusaAddress.postal_code || '',
            region: medusaAddress.province ?? undefined,
            phone: medusaAddress.phone ?? undefined,
        },
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

/**
 * Maps O2S Address to Medusa format.
 * address_1 = streetName, address_2 = streetNumber, metadata = { taxId, apartment }
 */
export function mapAddressToMedusa(address: Models.Address.Address): HttpTypes.StoreCreateCustomerAddress & {
    metadata?: Record<string, string>;
} {
    const metadata: Record<string, string> = {};
    if (address.taxId?.trim()) metadata.taxId = address.taxId.trim();
    if (address.apartment?.trim()) metadata.apartment = address.apartment.trim();

    return {
        first_name: (address.firstName || '').trim(),
        last_name: (address.lastName || '').trim(),
        company: address.companyName?.trim() || undefined,
        address_1: (address.streetName || '').trim(),
        address_2: address.streetNumber?.trim() || undefined,
        city: (address.city || '').trim(),
        country_code: (address.country || '').toLowerCase().trim(), // Medusa.js requires lowercase ISO country codes
        postal_code: (address.postalCode || '').trim(),
        province: address.region?.trim() || undefined,
        phone: address.phone?.trim() || undefined,
        ...(Object.keys(metadata).length > 0 ? { metadata } : {}),
    };
}
