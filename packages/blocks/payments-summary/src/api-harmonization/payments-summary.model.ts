import { Models as ApiModels } from '@o2s/utils.api-harmonization';

import { Models } from '@o2s/framework/modules';

export class PaymentsSummaryBlock extends ApiModels.Block.Block {
    __typename!: 'PaymentsSummaryBlock';
    currency!: Models.Price.Currency;
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
