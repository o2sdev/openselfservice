import { PaginationQuery } from '@/utils/models/pagination';

export class GetOrganizationParams {
    id!: string;
}

export class OrganizationsListQuery extends PaginationQuery {
    taxId?: string;
}

export class CheckMembershipParams {
    orgId!: string;
    userId!: string;
}
