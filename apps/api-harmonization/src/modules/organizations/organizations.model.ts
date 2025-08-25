import { Models as ApiModels } from '@o2s/utils.api-harmonization';

import { Models } from '@o2s/framework/modules';

export class CustomerList extends ApiModels.Block.Block {
    title?: string;
    description?: string;
    items!: Models.Customer.Customer[];
    labels!: {
        apply: string;
    };
}
