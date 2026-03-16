import { Models } from '@o2s/framework/modules';

/**
 * Common address fields shared across Medusa address types.
 * Medusa uses address_1 for street name, address_2 for street number.
 * taxId and apartment are stored in metadata.
 */
interface MedusaAddressFields {
    first_name?: string | null;
    last_name?: string | null;
    company?: string | null;
    country_code?: string | null;
    province?: string | null;
    address_1?: string | null;
    address_2?: string | null;
    city?: string | null;
    postal_code?: string | null;
    phone?: string | null;
    metadata?: Record<string, unknown> | null;
}

/**
 * Maps a Medusa address (from StoreCartAddress, StoreOrderAddress, AddressDTO, etc.) to the framework Address model.
 * address_1 = streetName, address_2 = streetNumber, metadata = { taxId, apartment }
 */
export function mapAddress(address?: MedusaAddressFields | null): Models.Address.Address | undefined {
    if (!address) {
        return undefined;
    }

    const meta = address.metadata ?? {};

    return {
        firstName: address.first_name ?? undefined,
        lastName: address.last_name ?? undefined,
        companyName: address.company ?? undefined,
        taxId: typeof meta.taxId === 'string' ? meta.taxId : undefined,
        country: address.country_code?.toUpperCase() ?? '',
        district: address.province ?? '',
        region: address.province ?? '',
        streetName: address.address_1 ?? '',
        streetNumber: address.address_2?.trim() || undefined,
        apartment: typeof meta.apartment === 'string' ? meta.apartment : undefined,
        city: address.city ?? '',
        postalCode: address.postal_code ?? '',
        phone: address.phone ?? undefined,
    };
}
