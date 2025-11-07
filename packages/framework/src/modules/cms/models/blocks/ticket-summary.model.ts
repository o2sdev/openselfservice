import { Block, InfoCard } from '@/utils/models';

export class TicketSummaryBlock extends Block.Block {
    title?: string;
    open?: InfoCard.InfoCard;
    inProgress?: InfoCard.InfoCard;
    closed?: InfoCard.InfoCard;
    layout?: 'vertical' | 'horizontal';
}
