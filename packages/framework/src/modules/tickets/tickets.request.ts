import { TicketStatus } from './tickets.model';
import { PaginationQuery } from '@/utils/models/pagination';

/** Parameters for fetching a single ticket: id, optional locale. */
export class GetTicketParams {
    id!: string;
    locale?: string;
}

/** Attachment input for ticket creation: filename, content, contentType. */
export class TicketAttachmentInput {
    filename!: string;
    content!: Buffer;
    contentType!: string; // e.g., 'application/pdf'
}

/** Body for creating a ticket: title, description, type, attachments, fields. */
export class PostTicketBody {
    title?: string;
    description?: string;
    type?: number;
    attachments?: TicketAttachmentInput[];
    fields?: Record<string, unknown>;
}

/** Query for ticket list: pagination, optional topic, type, status, dateFrom, dateTo, sort, search, priority, locale. */
export class GetTicketListQuery extends PaginationQuery {
    topic?: string;
    type?: string;
    status?: TicketStatus | TicketStatus[];
    dateFrom?: Date;
    dateTo?: Date;
    sort?: string;
    search?: string;
    priority?: string;
    locale?: string;
}
