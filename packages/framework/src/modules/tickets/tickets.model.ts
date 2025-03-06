import { Pagination } from '@/utils/models';

export class Ticket {
    id!: string;
    createdAt!: string;
    updatedAt!: string;
    topic!: string;
    type!: string;
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

export class TicketComment {
    author!: Author;
    date!: string;
    content!: string;
}

export class Author {
    name!: string;
    email?: string;
    avatar?: string;
}

export class TicketProperty {
    id!: string;
    value!: string;
}
