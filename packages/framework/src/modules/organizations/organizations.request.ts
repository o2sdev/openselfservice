import { PaginationQuery } from '@/utils/models/pagination';

export class GetOrganizationParams {
    id!: string;
}

export class OrganizationListQuery extends PaginationQuery {}
