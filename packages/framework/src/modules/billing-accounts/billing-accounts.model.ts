import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

import { Resource } from '@/modules/resources/resources.model';

import { Pagination } from '@/utils/models';

/** Billing account with associated resources. */
export class BillingAccount {
    @ApiProperty({ description: 'Unique billing account identifier' })
    id!: string;

    @ApiProperty({ description: 'Billing account number' })
    number!: string;

    @ApiProperty({ description: 'Billing account status' })
    status!: string;

    @ApiPropertyOptional({ description: 'Resources associated with this billing account', type: () => [Resource] })
    resources?: Resource[];
}

/** Paginated billing accounts list for OpenAPI schema. */
export class PaginatedBillingAccounts extends Pagination.Paginated<BillingAccount> {
    @ApiProperty({ description: 'Array of billing accounts', type: () => [BillingAccount] })
    declare data: BillingAccount[];

    @ApiProperty({ description: 'Total number of billing accounts matching the query' })
    declare total: number;
}

/** @deprecated Use PaginatedBillingAccounts class for OpenAPI compatibility. */
export type BillingAccounts = Pagination.Paginated<BillingAccount>;
