import { Modules } from '@o2s/api-harmonization';

import { Models } from '@o2s/framework/modules';

export interface ContentProps {
    data: Modules.Organizations.Model.OrganizationList;
    customers: Models.Customer.Customer[];
}

export interface ContextSwitcherFormValues {
    customer: string | undefined;
}
