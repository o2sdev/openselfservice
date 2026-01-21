import { TicketStatus } from './tickets.model';
import { PaginationQuery } from '@/utils/models/pagination';

export class GetTicketParams {
    id!: string;
    locale?: string;
}

export class TicketAttachmentInput {
    filename!: string;
    content!: Buffer;
    contentType!: string; // e.g., 'application/pdf'
}

export class PostTicketBody {
    title!: string;
    description!: string;
    topic!: string;
    attachments?: TicketAttachmentInput[];
    priority?: string;
    type?: string;
}

export class GetTicketListQuery extends PaginationQuery {
    topic?: string;
    type?: string;
    status?: TicketStatus;
    dateFrom?: Date;
    dateTo?: Date;
    sort?: string;
    search?: string;
    priority?: string;
    locale?: string;
}
