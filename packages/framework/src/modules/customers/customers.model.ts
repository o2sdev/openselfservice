import { Address, Pagination } from '@/utils/models';

export class CustomerAddress {
    id!: string;
    customerId!: string;
    label?: string; // e.g., "Home", "Work", "Billing"
    isDefault?: boolean;
    address!: Address.Address;
    createdAt!: string;
    updatedAt!: string;
}

export type CustomerAddresses = Pagination.Paginated<CustomerAddress>;
