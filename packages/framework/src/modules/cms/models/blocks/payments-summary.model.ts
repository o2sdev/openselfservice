import { Block, InfoCard } from '@/utils/models';

/** Chart configuration used by payments summary block. */
export class PaymentsSummaryChart {
    title?: string;
    topSegment!: string;
    middleSegment!: string;
    bottomSegment!: string;
    total!: string;
    showChart?: boolean;
    monthsToShow?: number;
}

/** CMS block configuration for payments summary cards and chart. */
export class PaymentsSummaryBlock extends Block.Block {
    overdue?: InfoCard.InfoCard;
    toBePaid?: InfoCard.InfoCard;
    layout?: 'vertical' | 'horizontal';
    chart?: PaymentsSummaryChart;
}
