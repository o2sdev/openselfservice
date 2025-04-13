import { Modules } from '@o2s/api-harmonization';

export interface ContentProps {
    data: Modules.Organizations.Model.CustomerList;
}

export interface ContextSwitcherFormValues {
    customer: string | undefined;
}
