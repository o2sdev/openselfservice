import { Address } from '@/utils/models';

/** Route params for fetching a single customer address. */
export class GetAddressParams {
    /** Customer address identifier. */
    id!: string;
}

/** Request body for creating a customer address. */
export class CreateAddressBody {
    /** Optional address label shown in UI (e.g. "Home", "Office"). */
    label?: string;
    /** Sets the new address as default when true. */
    isDefault?: boolean;
    /** Full address payload. */
    address!: Address.Address;
}

/** Route params for updating a single customer address. */
export class UpdateAddressParams {
    /** Customer address identifier. */
    id!: string;
}

/** Request body for updating a customer address. */
export class UpdateAddressBody {
    /** Optional address label shown in UI. */
    label?: string;
    /** Sets the updated address as default when true. */
    isDefault?: boolean;
    /** Updated full address payload. */
    address?: Address.Address;
}

/** Route params for deleting a single customer address. */
export class DeleteAddressParams {
    /** Customer address identifier. */
    id!: string;
}

/** Route params for setting a default customer address. */
export class SetDefaultAddressParams {
    /** Customer address identifier. */
    id!: string;
}
