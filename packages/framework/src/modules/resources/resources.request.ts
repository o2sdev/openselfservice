import { PaginationQuery } from '../../utils/models/pagination';

import { ContractStatus, ProductType } from './resources.model';

export class GetResourceListQuery extends PaginationQuery {
    type?: ProductType;
    status?: string;
    billingAccountId?: string;
    dateFrom?: string;
    dateTo?: string;
    resourceType?: ResourceType;
}

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

export class GetResourceParams {
    id!: string;
    locale?: string;
}

export class GetServiceParams extends GetResourceParams {}

export class GetAssetParams extends GetResourceParams {}

export enum ResourceType {
    ASSET = 'Asset',
    SERVICE = 'Service',
}
