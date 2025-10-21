import { Ticket } from '@/modules/tickets/tickets.model';

import { Block, Mapping } from '@/utils/models';

export class TicketDetailsBlock extends Block.Block {
    title?: string;
    commentsTitle?: string;
    attachmentsTitle?: string;
    properties?: {
        [key: string]: string;
    };
    fieldMapping!: Mapping.Mapping<Ticket>;
    labels!: {
        showMore: string;
        showLess: string;
        today: string;
        yesterday: string;
    };
}
