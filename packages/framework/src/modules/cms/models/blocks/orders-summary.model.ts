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
}

export class OrdersInfo {
    title!: string;
}

export class OrdersChart {
    title!: string;
}
