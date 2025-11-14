import { CMS } from '@o2s/configs.integrations';

import { Models as ApiModels } from '@o2s/utils.api-harmonization';

import { Models } from '@o2s/framework/modules';

export class OrdersSummaryBlock extends ApiModels.Block.Block {
    __typename!: 'OrdersSummaryBlock';
    title!: CMS.Model.OrdersSummaryBlock.OrdersSummaryBlock['title'];
    subtitle!: CMS.Model.OrdersSummaryBlock.OrdersSummaryBlock['subtitle'];
    totalValue!: {
        title: CMS.Model.OrdersSummaryBlock.OrdersSummaryBlock['totalValue']['title'];
        value?: Models.Price.Price;
        trend?: number;
        icon?: string;
    };
    averageValue!: {
        title: CMS.Model.OrdersSummaryBlock.OrdersSummaryBlock['averageValue']['title'];
        value: Models.Price.Price;
        trend: number;
        icon?: string;
    };
    averageNumber!: {
        title: CMS.Model.OrdersSummaryBlock.OrdersSummaryBlock['averageNumber']['title'];
        value: number;
        trend: number;
        icon?: string;
    };
    chart!: {
        title: CMS.Model.OrdersSummaryBlock.OrdersSummaryBlock['chart']['title'];
        data: ChartData[];
        legend: {
            prev: string;
            current: string;
        };
        showChart?: boolean;
    };
    ranges!: CMS.Model.OrdersSummaryBlock.OrdersSummaryBlock['ranges'];
    layout?: 'vertical' | 'horizontal';
    noResults!: CMS.Model.OrdersSummaryBlock.OrdersSummaryBlock['noResults'];
}

export class ChartData {
    label!: string;
    prev!: number;
    current!: number;
}
