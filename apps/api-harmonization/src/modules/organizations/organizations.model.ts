import { Models } from '@o2s/framework/modules';

import { Block } from '../../utils';

export class CustomerList extends Block.Block {
    title?: string;
    description?: string;
    items!: Models.Customer.Customer[];
    labels!: {
        apply: string;
    };
}

export class OrganizationMembership {
    id!: string;
    name!: string;
    taxId!: string;
    user?: {
        username: string;
    };
}
