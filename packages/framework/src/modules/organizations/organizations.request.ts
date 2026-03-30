import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

import { PaginationQuery } from '@/utils/models/pagination';

/** Parameters for a single organization: id. */
export class GetOrganizationParams {
    @ApiProperty({ description: 'Organization identifier.' })
    id!: string;
}

/** Query for organization list: pagination, optional taxId. */
export class OrganizationsListQuery extends PaginationQuery {
    @ApiPropertyOptional({ description: 'Optional tax identifier filter.' })
    taxId?: string;
}

/** Parameters for membership check: orgId, userId. */
export class CheckMembershipParams {
    @ApiProperty({ description: 'Organization identifier.' })
    orgId!: string;
    @ApiProperty({ description: 'User identifier to check membership for.' })
    userId!: string;
}
