import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

import { PaginationQuery } from '@/utils/models/pagination';

/** Query params for fetching a paginated billing account list. */
export class GetBillingAccountsListQuery extends PaginationQuery {
    /** Billing account status filter. */
    @ApiPropertyOptional({ description: 'Billing account status filter.' })
    status?: string;
    /** Billing account number filter. */
    @ApiPropertyOptional({ description: 'Billing account number filter.' })
    number?: string;
}

/** Route params for fetching a single billing account. */
export class GetBillingAccountParams {
    /** Billing account identifier. */
    @ApiProperty({ description: 'Billing account identifier.' })
    id!: string;
}
