import { Organizations } from '@o2s/framework/modules';

export class GetCustomersQuery implements Organizations.Request.OrganizationListQuery {
    offset?: number;
    limit?: number;
}
