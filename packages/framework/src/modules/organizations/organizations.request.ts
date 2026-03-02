import { PaginationQuery } from '@/utils/models/pagination';

/** Parameters for a single organization: id. */
export class GetOrganizationParams {
    id!: string;
}

/** Query for organization list: pagination, optional taxId. */
export class OrganizationsListQuery extends PaginationQuery {
    taxId?: string;
}

/** Parameters for membership check: orgId, userId. */
export class CheckMembershipParams {
    orgId!: string;
    userId!: string;
}
