import { Ticket } from '@/modules/tickets/tickets.model';
import { Component, Mapping } from '@/utils/models';

export class TicketDetailsComponent extends Component.Component {
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
