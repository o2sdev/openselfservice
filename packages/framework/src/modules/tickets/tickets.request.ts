import { TicketStatus } from './tickets.model';
import { PaginationQuery } from '@/utils/models/pagination';

/** Query params for fetching a single ticket. */
export class GetTicketParams {
    /** Ticket identifier. */
    id!: string;
    /** Optional locale passed via query string (kept as string). */
    locale?: string;
}

/** Attachment input for ticket creation: filename, content, contentType. */
export class TicketAttachmentInput {
    /** Attachment filename. */
    filename!: string;
    /** Attachment binary content. */
    content!: Buffer;
    /** MIME type of attachment content (e.g., 'application/pdf'). */
    contentType!: string; // e.g., 'application/pdf'
}

/** Request body for creating a new ticket. */
export class PostTicketBody {
    /** Ticket title. */
    title?: string;
    /** Ticket description/details. */
    description?: string;
    /** Ticket type identifier. */
    type?: number;
    /** Optional attachment list (TicketAttachmentInput[]). */
    attachments?: TicketAttachmentInput[];
    /** Additional custom fields map. */
    fields?: Record<string, unknown>;
}

/** Query params for fetching a paginated ticket list. */
export class GetTicketListQuery extends PaginationQuery {
    /** Topic filter. */
    topic?: string;
    /** Ticket type filter. */
    type?: string;
    /** One or many statuses to filter by. */
    status?: TicketStatus | TicketStatus[];
    /** Date range start from query string (kept as string). */
    dateFrom?: string;
    /** Date range end from query string (kept as string). */
    dateTo?: string;
    /** Sort expression from query string, e.g. `createdAt_DESC`. */
    sort?: string;
    /** Free-text search phrase. */
    search?: string;
    /** Priority filter. */
    priority?: string;
    /** Optional locale passed via query string (kept as string). */
    locale?: string;
}
