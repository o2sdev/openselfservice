import { Address, Pagination } from '@/utils/models';

/** Address entry managed by a customer profile. */
export class CustomerAddress {
    id!: string;
    customerId!: string;
    /** Optional UI label (for example: Home, Work, Billing). */
    label?: string;
    isDefault?: boolean;
    address!: Address.Address;
    createdAt!: string;
    updatedAt!: string;
}

/** Paginated customer address list. */
export type CustomerAddresses = Pagination.Paginated<CustomerAddress>;
