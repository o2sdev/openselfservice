import { Organizations } from '@o2s/framework/modules';

export class GetCustomersQuery implements Organizations.Request.OrganizationsListQuery {
    offset?: number;
    limit?: number;
}

export class CheckMembershipQuery implements Organizations.Request.OrganizationsListQuery {
    taxId!: string;
    username!: string;
}
