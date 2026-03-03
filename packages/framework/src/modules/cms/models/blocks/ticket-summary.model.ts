import { TicketStatus } from '@/modules/tickets/tickets.model';

import { Block } from '@/utils/models';

/** Summary info card item used in ticket summary block. */
export class TicketSummaryInfoCard {
    title!: string;
    icon?: string;
    value!: number;
    description?: string;
    variant?: TicketStatus;
}

/** CMS block configuration for ticket summary cards. */
export class TicketSummaryBlock extends Block.Block {
    layout?: 'vertical' | 'horizontal';
    infoCards!: TicketSummaryInfoCard[];
}
