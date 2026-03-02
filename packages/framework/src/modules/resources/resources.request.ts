import { ContractStatus, ProductType } from './resources.model';
import { PaginationQuery } from '@/utils/models/pagination';

/** Query for resource list: pagination, optional type, status, billingAccountId, dates, resourceType. */
export class GetResourceListQuery extends PaginationQuery {
    type?: ProductType;
    status?: string;
    billingAccountId?: string;
    dateFrom?: string;
    dateTo?: string;
    resourceType?: ResourceType;
}

/** Query for service list: pagination, optional status, type, category, billingAccountId, dates, sort, locale. */
export class GetServiceListQuery extends PaginationQuery {
    status?: ContractStatus;
    type?: ProductType;
    category?: string;
    billingAccountId?: string;
    dateFrom?: string;
    dateTo?: string;
    sort?: string;
    locale?: string;
}

export class GetAssetListQuery extends PaginationQuery {
    type?: ProductType;
    status?: string;
    billingAccountId?: string;
    dateFrom?: string;
    dateTo?: string;
    sort?: string;
    locale?: string;
}

/** Parameters for a single resource: id, optional locale. */
export class GetResourceParams {
    id!: string;
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
