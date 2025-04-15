import { PaginationQuery } from '@/utils/models/pagination';

export class GetOrganizationParams {
    id!: string;
}

export class OrganizationsListQuery extends PaginationQuery {}
