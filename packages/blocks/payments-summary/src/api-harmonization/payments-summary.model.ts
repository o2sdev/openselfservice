import { Models as ApiModels } from '@o2s/utils.api-harmonization';

import { Invoices, Models } from '@o2s/framework/modules';

export class PaymentsSummaryBlock extends ApiModels.Block.Block {
    __typename!: 'PaymentsSummaryBlock';
    currency!: Invoices.Model.Invoice['currency'];
    overdue?: {
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
    toBePaid?: {
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
    layout?: 'vertical' | 'horizontal';
    chart?: {
        title?: string;
        labels: {
            topSegment: string;
            middleSegment: string;
            bottomSegment: string;
            total: string;
        };
        chartData: BarData[];
        showChart?: boolean;
        monthsToShow?: number;
    };
}

export class BarData {
    month!: string;
    topSegment!: string;
    middleSegment!: string;
    bottomSegment!: string;
    total!: string;
}
