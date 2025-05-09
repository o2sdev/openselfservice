import { Block } from '@/utils/models';

export class OrdersSummaryBlock extends Block.Block {
    title?: string;
    subtitle?: string;
    totalValue!: OrdersInfo;
    averageValue!: OrdersInfo;
    averageNumber!: OrdersInfo;
    chart!: OrdersChart;
    noResults!: {
        title: string;
        description?: string;
    };
    ranges!: Range[];
}

export class OrdersInfo {
    title!: string;
}

export class OrdersChart {
    title!: string;
    legend!: ChartLegend;
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
