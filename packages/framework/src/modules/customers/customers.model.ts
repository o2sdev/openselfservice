import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

import { Address, Pagination } from '@/utils/models';

/** Address entry managed by a customer profile. */
export class CustomerAddress {
    @ApiProperty({ description: 'Unique address identifier' })
    id!: string;

    @ApiProperty({ description: 'Associated customer identifier' })
    customerId!: string;

    @ApiPropertyOptional({ description: 'UI label (e.g., Home, Work, Billing)' })
    label?: string;

    @ApiPropertyOptional({ description: 'Whether this is the default address' })
    isDefault?: boolean;

    @ApiProperty({ description: 'Full address details' })
    address!: Address.Address;

    @ApiProperty({ description: 'Address creation timestamp in ISO 8601 format' })
    createdAt!: string;

    @ApiProperty({ description: 'Last update timestamp in ISO 8601 format' })
    updatedAt!: string;
}

/** Paginated customer address list for OpenAPI schema. */
export class PaginatedCustomerAddresses extends Pagination.Paginated<CustomerAddress> {
    @ApiProperty({ description: 'Array of customer addresses', type: () => [CustomerAddress] })
    declare data: CustomerAddress[];

    @ApiProperty({ description: 'Total number of addresses matching the query' })
    declare total: number;
}

/** @deprecated Use PaginatedCustomerAddresses class for OpenAPI compatibility. */
export type CustomerAddresses = Pagination.Paginated<CustomerAddress>;
