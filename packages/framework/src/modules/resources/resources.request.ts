import { ContractStatus, ProductType } from './resources.model';
import { PaginationQuery } from '@/utils/models/pagination';

/** Query params for fetching a paginated resource list. */
export class GetResourceListQuery extends PaginationQuery {
    /** Product type filter. */
    type?: ProductType;
    /** Resource status filter. */
    status?: string;
    /** Billing account identifier filter. */
    billingAccountId?: string;
    /** Date range start from query string (kept as string). */
    dateFrom?: string;
    /** Date range end from query string (kept as string). */
    dateTo?: string;
    /** Resource subtype filter (asset or service). */
    resourceType?: ResourceType;
}

/** Query params for fetching a paginated service list. */
export class GetServiceListQuery extends PaginationQuery {
    /** Contract status filter. */
    status?: ContractStatus;
    /** Product type filter. */
    type?: ProductType;
    /** Service category filter. */
    category?: string;
    /** Billing account identifier filter. */
    billingAccountId?: string;
    /** Date range start from query string (kept as string). */
    dateFrom?: string;
    /** Date range end from query string (kept as string). */
    dateTo?: string;
    /** Sort expression from query string, e.g. `createdAt_DESC`. */
    sort?: string;
    /** Optional locale passed via query string (kept as string). */
    locale?: string;
}

/** Query params for fetching a paginated asset list. */
export class GetAssetListQuery extends PaginationQuery {
    /** Product type filter. */
    type?: ProductType;
    /** Asset status filter. */
    status?: string;
    /** Billing account identifier filter. */
    billingAccountId?: string;
    /** Date range start from query string (kept as string). */
    dateFrom?: string;
    /** Date range end from query string (kept as string). */
    dateTo?: string;
    /** Sort expression from query string, e.g. `createdAt_DESC`. */
    sort?: string;
    /** Optional locale passed via query string (kept as string). */
    locale?: string;
}

/** Query params for fetching a single resource. */
export class GetResourceParams {
    /** Resource identifier. */
    id!: string;
    /** Optional locale passed via query string (kept as string). */
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
