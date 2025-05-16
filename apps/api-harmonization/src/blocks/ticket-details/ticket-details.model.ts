import { Tickets } from '../../models';
import { Block } from '../../utils';

export class TicketDetailsBlock extends Block.Block {
    __typename!: 'TicketDetailsBlock';
    data!: Ticket;
}

export class Ticket {
    id!: {
        value: Tickets.Model.Ticket['id'];
        title: string;
        label: string;
    };
    topic!: {
        value: Tickets.Model.Ticket['topic'];
        title: string;
        label: string;
    };
    type!: {
        value: Tickets.Model.Ticket['type'];
        title: string;
        label: string;
    };
    status!: {
        value: Tickets.Model.Ticket['status'];
        title: string;
        label: string;
    };
    createdAt!: Tickets.Model.Ticket['createdAt'];
    updatedAt!: Tickets.Model.Ticket['updatedAt'];
    properties!: TicketProperties;
    comments!: TicketComments;
    attachments!: TicketAttachments;
}

export class TicketAttachments {
    title?: string;
    items!: TicketAttachment[];
}

export class TicketAttachment {
    name!: string;
    url!: string;
    size!: number;
    author!: Tickets.Model.Author;
    date!: string;
    ariaLabel!: string;
}

export class TicketComments {
    title?: string;
    items!: TicketComment[];
}

export class TicketComment {
    author!: Tickets.Model.Author;
    date!: string;
    content!: string;
}

export class TicketProperties {
    title?: string;
    items!: TicketProperty[];
}

export class TicketProperty {
    id!: string;
    value!: string;
    label!: string;
}
