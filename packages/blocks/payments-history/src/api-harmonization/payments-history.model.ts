import { Models as ApiModels } from '@o2s/utils.api-harmonization';

import { Models } from '@o2s/framework/modules';

export class PaymentsHistoryBlock extends ApiModels.Block.Block {
    __typename!: 'PaymentsHistoryBlock';
    title?: string;
    labels!: {
        topSegment: string;
        middleSegment: string;
        bottomSegment: string;
        total: string;
    };
    currency!: Models.Price.Currency;
    chartData!: BarData[];
    permissions?: {
        view: boolean;
        pay: boolean;
    };
}

export class BarData {
    month!: string;
    topSegment!: string;
    middleSegment!: string;
    bottomSegment!: string;
    total!: string;
}
