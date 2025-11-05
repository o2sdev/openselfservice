import { Block, InfoCard } from '@/utils/models';

export class OrdersSummaryBlock extends Block.Block {
    title?: string;
    subtitle?: string;
    totalValue!: InfoCard.InfoCard;
    averageValue!: InfoCard.InfoCard;
    averageNumber!: InfoCard.InfoCard;
    chart!: OrdersChart;
    ranges?: Range[];
    noResults!: {
        title: string;
        description?: string;
    };
}

export class OrdersChart {
    title!: string;
    legend!: ChartLegend;
    showChart?: boolean;
}

export class ChartLegend {
    prev!: string;
    current!: string;
}

export class Range {
    label!: string;
    value!: number;
    type!: 'month' | 'day';
    isDefault?: boolean;
}
