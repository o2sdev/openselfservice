import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

import type { ContractStatus, ProductType } from './resources.model';
import { PaginationQuery } from '@/utils/models/pagination';

/** Query params for fetching a paginated resource list. */
export class GetResourceListQuery extends PaginationQuery {
    /** Product type filter. */
    @ApiPropertyOptional({ description: 'Filter resources by product type.' })
    type?: ProductType;
    /** Resource status filter. */
    @ApiPropertyOptional({ description: 'Filter resources by lifecycle/status value from integration.' })
    status?: string;
    /** Billing account identifier filter. */
    @ApiPropertyOptional({ description: 'Filter resources by billing account identifier.' })
    billingAccountId?: string;
    /** Date range start from query string (kept as string). */
    @ApiPropertyOptional({ description: 'Include resources created/updated from this date (ISO string).' })
    dateFrom?: string;
    /** Date range end from query string (kept as string). */
    @ApiPropertyOptional({ description: 'Include resources created/updated until this date (ISO string).' })
    dateTo?: string;
    /** Resource subtype filter (asset or service). */
    @ApiPropertyOptional({ description: 'Filter by resource subtype: `Asset` or `Service`.' })
    resourceType?: ResourceType;
}

/** Query params for fetching a paginated service list. */
export class GetServiceListQuery extends PaginationQuery {
    /** Contract status filter. */
    @ApiPropertyOptional({ description: 'Filter services by contract status.' })
    status?: ContractStatus;
    /** Product type filter. */
    @ApiPropertyOptional({ description: 'Filter services by product type.' })
    type?: ProductType;
    /** Service category filter. */
    @ApiPropertyOptional({ description: 'Filter services by category identifier.' })
    category?: string;
    /** Billing account identifier filter. */
    @ApiPropertyOptional({ description: 'Filter services by billing account identifier.' })
    billingAccountId?: string;
    /** Date range start from query string (kept as string). */
    @ApiPropertyOptional({ description: 'Include services created/updated from this date (ISO string).' })
    dateFrom?: string;
    /** Date range end from query string (kept as string). */
    @ApiPropertyOptional({ description: 'Include services created/updated until this date (ISO string).' })
    dateTo?: string;
    /** Sort expression from query string, e.g. `createdAt_DESC`. */
    @ApiPropertyOptional({ description: 'Sort expression, for example `createdAt_DESC`.' })
    sort?: string;
    /** Optional locale passed via query string (kept as string). */
    @ApiPropertyOptional({ description: 'Optional locale code used to localize response values.' })
    locale?: string;
}

/** Query params for fetching a paginated asset list. */
export class GetAssetListQuery extends PaginationQuery {
    /** Product type filter. */
    @ApiPropertyOptional({ description: 'Filter assets by product type.' })
    type?: ProductType;
    /** Asset status filter. */
    @ApiPropertyOptional({ description: 'Filter assets by lifecycle/status value from integration.' })
    status?: string;
    /** Billing account identifier filter. */
    @ApiPropertyOptional({ description: 'Filter assets by billing account identifier.' })
    billingAccountId?: string;
    /** Date range start from query string (kept as string). */
    @ApiPropertyOptional({ description: 'Include assets created/updated from this date (ISO string).' })
    dateFrom?: string;
    /** Date range end from query string (kept as string). */
    @ApiPropertyOptional({ description: 'Include assets created/updated until this date (ISO string).' })
    dateTo?: string;
    /** Sort expression from query string, e.g. `createdAt_DESC`. */
    @ApiPropertyOptional({ description: 'Sort expression, for example `createdAt_DESC`.' })
    sort?: string;
    /** Optional locale passed via query string (kept as string). */
    @ApiPropertyOptional({ description: 'Optional locale code used to localize response values.' })
    locale?: string;
}

/** Query params for fetching a single resource. */
export class GetResourceParams {
    /** Resource identifier. */
    @ApiProperty({ description: 'Resource identifier.' })
    id!: string;
    /** Optional locale passed via query string (kept as string). */
    @ApiPropertyOptional({ description: 'Optional locale code used to localize response values.' })
    locale?: string;
}

/** Parameters for a single service (extends GetResourceParams). */
export class GetServiceParams extends GetResourceParams {}

/** Parameters for a single asset (extends GetResourceParams). */
export class GetAssetParams extends GetResourceParams {}

/** Resource type. */
export enum ResourceType {
    ASSET = 'Asset',
    SERVICE = 'Service',
}
