import { ProductType } from './resources.model';
import { PaginationQuery } from '@/utils/models/pagination';

export class GetResourceListQuery extends PaginationQuery {
    type?: ProductType;
    status?: string;
    billingAccountId?: string;
    dateFrom?: string;
    dateTo?: string;
    resourceType?: ResourceType;
}

export class GetResourceParams {
    id!: string;
}

export enum ResourceType {
    ASSET = 'Asset',
    SERVICE = 'Service',
}
