import { ApiProperty } from '@nestjs/swagger';

import { Pagination } from '@/utils/models';
import { Customer } from '@/utils/models/customer';
import { Party } from '@/utils/models/party';

/** Organization entity with hierarchy and customer relations. */
export class Organization extends Party {
    @ApiProperty({ description: 'Whether the organization is currently active' })
    isActive!: boolean;

    @ApiProperty({ description: 'Tax identification number' })
    taxId!: string;

    @ApiProperty({ description: 'Child organizations in hierarchy', type: () => [Organization] })
    children!: Organization[];

    @ApiProperty({ description: 'Customers associated with this organization', type: () => [Customer] })
    customers!: Customer[];
}

/** Membership check result. */
export class MembershipResult {
    @ApiProperty({ description: 'Whether the user is a member of the organization' })
    isMember!: boolean;
}

/** Paginated organization list for OpenAPI schema. */
export class PaginatedOrganizations extends Pagination.Paginated<Organization> {
    @ApiProperty({ description: 'Array of organizations', type: () => [Organization] })
    declare data: Organization[];

    @ApiProperty({ description: 'Total number of organizations matching the query' })
    declare total: number;
}

/** @deprecated Use PaginatedOrganizations class for OpenAPI compatibility. */
export type Organizations = Pagination.Paginated<Organization>;
