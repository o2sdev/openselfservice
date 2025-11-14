import { Block, InfoCard } from '@/utils/models';

export class PaymentsSummaryChart {
    title?: string;
    topSegment!: string;
    middleSegment!: string;
    bottomSegment!: string;
    total!: string;
    showChart?: boolean;
    monthsToShow?: number;
}

export class PaymentsSummaryBlock extends Block.Block {
    overdue?: InfoCard.InfoCard;
    toBePaid?: InfoCard.InfoCard;
    layout?: 'vertical' | 'horizontal';
    chart?: PaymentsSummaryChart;
}
