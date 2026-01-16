import { TicketStatus } from './tickets.model';
import { PaginationQuery } from '@/utils/models/pagination';

export class GetTicketParams {
    id!: string;
    locale?: string;
}

export class TicketAttachmentInput {
    filename!: string;
    content!: string; // base64 encoded content
    contentType!: string; // e.g., 'application/pdf'
}

export type TicketPriority = 'urgent' | 'high' | 'normal' | 'low';
export type TicketType = 'question' | 'problem' | 'incident' | 'task';

export class PostTicketBody {
    title!: string;
    description!: string;
    topic!: string;
    attachments?: TicketAttachmentInput[];
    priority?: TicketPriority;
    type?: TicketType;
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
