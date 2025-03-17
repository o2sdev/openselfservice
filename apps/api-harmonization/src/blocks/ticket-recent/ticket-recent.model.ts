import { Tickets } from '../../models';
// TODO: this has to be a relative import so it could be resolved properly in `frontend` app; try to find a better way
import { Block } from '../../utils';

export class TicketRecentBlock extends Block.Block {
    __typename!: 'TicketRecentBlock';
    title?: string;
    noResults?: string;
    details?: string;
    tickets!: {
        data: Ticket[];
    };
}

export class Ticket {
    id!: {
        value: Tickets.Model.Ticket['id'];
    };
    topic!: {
        value: Tickets.Model.Ticket['topic'];
    };
    type!: {
        value: Tickets.Model.Ticket['type'];
    };
    status!: {
        value: Tickets.Model.Ticket['status'];
    };
    createdAt!: Tickets.Model.Ticket['createdAt'];
    updatedAt!: Tickets.Model.Ticket['updatedAt'];
    comments!: TicketComments;
    detailsUrl!: string;
}

export class TicketComments {
    title?: string;
    items!: TicketComment[];
}

export class TicketComment {
    author!: Tickets.Model.Author & { initials: string };
    date!: string;
    content!: string;
}
