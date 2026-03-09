import { TicketStatus } from '@/modules/tickets/tickets.model';

import { Block } from '@/utils/models';

/** Summary info card item used in ticket summary block. */
export class TicketSummaryInfoCard {
    /** Main label text displayed on the card (e.g. "Under consideration", "Resolved"). */
    title!: string;
    /** Optional icon name/identifier (e.g. "Clock", "AlertCircle", "CheckCircle"). */
    icon?: string;
    /** Number of tickets in this category. Plain integer count. */
    value!: number;
    /** Optional supplementary text (e.g. tooltip, accessibility). Used when extra context is needed. */
    description?: string;
    /** Optional ticket status category. One of: OPEN, CLOSED, IN_PROGRESS. */
    variant?: TicketStatus;
}

/** CMS block configuration for ticket summary cards. */
export class TicketSummaryBlock extends Block.Block {
    layout?: 'vertical' | 'horizontal';
    infoCards!: TicketSummaryInfoCard[];
}
