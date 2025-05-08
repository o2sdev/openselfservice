import { Block } from '@/utils/models';

export class OrdersSummaryBlock extends Block.Block {
    title?: string;
    subtitle?: string;
    totalValue!: OrdersInfo;
    averageValue!: OrdersInfo;
    averageNumber!: OrdersInfo;
    chart!: OrdersChart;
    ranges?: Range[];
    noResults!: {
        title: string;
        description?: string;
    };
}

export class OrdersInfo {
    title!: string;
}

export class OrdersChart {
    title!: string;
}

export class Range {
    label!: string;
    value!: number;
    type!: 'month' | 'day';
    isDefault?: boolean;
}
