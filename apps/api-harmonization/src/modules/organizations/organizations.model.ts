import { Models } from '@o2s/framework/modules';

export class CustomerList extends Models.Block.Block {
    title?: string;
    description?: string;
    items!: Models.Customer.Customer[];
    labels!: {
        apply: string;
    };
}
