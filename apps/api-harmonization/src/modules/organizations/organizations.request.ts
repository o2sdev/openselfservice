import { Organizations } from '@o2s/framework/modules';

export class GetOrganizationsQuery implements Organizations.Request.OrganizationListQuery {
    offset?: number;
    limit?: number;
}
