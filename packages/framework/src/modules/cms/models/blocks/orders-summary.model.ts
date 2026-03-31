import { Block, InfoCard } from '@/utils/models';

/** CMS block configuration for aggregated orders summary. */
export class OrdersSummaryBlock extends Block.Block {
    title?: string;
    subtitle?: string;
    totalValue!: InfoCard.InfoCard;
    averageValue!: InfoCard.InfoCard;
    averageNumber!: InfoCard.InfoCard;
    chart!: OrdersChart;
    ranges?: Range[];
    layout?: 'vertical' | 'horizontal';
    noResults!: {
        title: string;
        description?: string;
    };
}

/** Chart settings for orders summary block. */
export class OrdersChart {
    title!: string;
    legend!: ChartLegend;
    showChart?: boolean;
}

/** Legend labels for orders summary chart. */
export class ChartLegend {
    prev!: string;
    current!: string;
}

/** Time range selector item for summary calculations. */
export class Range {
    label!: string;
    value!: number;
    type!: 'month' | 'day';
    isDefault?: boolean;
}
