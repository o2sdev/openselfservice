import { TicketStatus } from '@/modules/tickets/tickets.model';

import { Block } from '@/utils/models';

export class TicketSummaryInfoCard {
    title!: string;
    icon?: string;
    value!: number;
    description?: string;
    variant?: TicketStatus;
}

export class TicketSummaryBlock extends Block.Block {
    layout?: 'vertical' | 'horizontal';
    infoCards!: TicketSummaryInfoCard[];
}
