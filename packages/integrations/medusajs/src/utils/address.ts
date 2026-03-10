import { Models } from '@o2s/framework/modules';

/**
 * Common address fields shared across Medusa address types
 */
interface MedusaAddressFields {
    first_name?: string | null;
    last_name?: string | null;
    country_code?: string | null;
    province?: string | null;
    address_1?: string | null;
    address_2?: string | null;
    city?: string | null;
    postal_code?: string | null;
    phone?: string | null;
}

/**
 * Maps a Medusa address (from StoreCartAddress, StoreOrderAddress, AddressDTO, etc.) to the framework Address model.
 * Handles all Medusa address types by accepting the common fields interface.
 */
export function mapAddress(address?: MedusaAddressFields | null): Models.Address.Address | undefined {
    if (!address) {
        return undefined;
    }

    return {
        firstName: address.first_name ?? undefined,
        lastName: address.last_name ?? undefined,
        country: address.country_code ?? '',
        district: address.province ?? '',
        region: address.province ?? '',
        streetName: address.address_1 ?? '',
        streetNumber: undefined, // Medusa does not store street number separately
        apartment: address.address_2 ?? undefined,
        city: address.city ?? '',
        postalCode: address.postal_code ?? '',
        phone: address.phone ?? undefined,
    };
}
