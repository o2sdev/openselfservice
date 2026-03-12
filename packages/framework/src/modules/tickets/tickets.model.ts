import { Pagination } from '@/utils/models';

/** Ticket: id, topic, type, status, properties, attachments, comments. */
export class Ticket {
    id!: string;
    createdAt!: string;
    updatedAt!: string;
    topic!: string;
    type?: string;
    status!: TicketStatus;
    properties!: TicketProperty[];
    attachments?: TicketAttachment[];
    comments?: TicketComment[];
}

export type Tickets = Pagination.Paginated<Ticket>;

export type TicketStatus = 'OPEN' | 'CLOSED' | 'IN_PROGRESS';

export class TicketAttachment {
    name!: string;
    url!: string;
    size!: number;
    author!: Author;
    date!: string;
    ariaLabel!: string;
}

/** Ticket comment: author, date, content. */
export class TicketComment {
    author!: Author;
    date!: string;
    content!: string;
}

/** Author: name, email, avatar. */
export class Author {
    name!: string;
    email?: string;
    avatar?: string;
}

/** Ticket property: id, value. */
export class TicketProperty {
    id!: string;
    value!: string;
}
