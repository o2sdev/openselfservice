import { Models } from '@o2s/framework/modules';

import { Invoices } from '../../models';
import { Block } from '../../utils';

export class PaymentsSummaryBlock extends Block.Block {
    __typename!: 'PaymentsSummaryBlock';
    currency!: Invoices.Model.Invoice['currency'];
    overdue!: {
        title: string;
        icon?: string;
        value: Models.Price.Price;
        description?: string;
        link?: {
            label: string;
            url?: string;
            icon?: string;
        };
        isOverdue: boolean;
    };
    toBePaid!: {
        title: string;
        icon?: string;
        value: Models.Price.Price;
        description?: string;
        link?: {
            label: string;
            url?: string;
            icon?: string;
        };
    };
}
