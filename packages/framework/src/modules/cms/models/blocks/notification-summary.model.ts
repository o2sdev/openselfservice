import { Block, InfoCard } from '@/utils/models';

export class NotificationSummaryBlock extends Block.Block {
    title?: string;
    high?: InfoCard.InfoCard;
    medium?: InfoCard.InfoCard;
    low?: InfoCard.InfoCard;
    critical?: InfoCard.InfoCard;
    layout?: 'vertical' | 'horizontal';
}
