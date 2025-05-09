import { Models } from '@o2s/framework/modules';

import { CMS } from '../../models';
import { Block } from '../../utils';

export class OrdersSummaryBlock extends Block.Block {
    __typename!: 'OrdersSummaryBlock';
    title!: CMS.Model.OrdersSummaryBlock.OrdersSummaryBlock['title'];
    subtitle!: CMS.Model.OrdersSummaryBlock.OrdersSummaryBlock['subtitle'];
    totalValue!: {
        title: CMS.Model.OrdersSummaryBlock.OrdersSummaryBlock['totalValue']['title'];
        value?: Models.Price.Price;
        trend?: number;
    };
    averageValue!: {
        title: CMS.Model.OrdersSummaryBlock.OrdersSummaryBlock['averageValue']['title'];
        value: Models.Price.Price;
        trend: number;
    };
    averageNumber!: {
        title: CMS.Model.OrdersSummaryBlock.OrdersSummaryBlock['averageNumber']['title'];
        value: number;
        trend: number;
    };
    chart!: {
        title: CMS.Model.OrdersSummaryBlock.OrdersSummaryBlock['chart']['title'];
        data: ChartData[];
        legend: {
            prev: string;
            current: string;
        };
    };
    ranges!: CMS.Model.OrdersSummaryBlock.OrdersSummaryBlock['ranges'];
    noResults!: CMS.Model.OrdersSummaryBlock.OrdersSummaryBlock['noResults'];
}

export class ChartData {
    label!: string;
    prev!: number;
    current!: number;
}
