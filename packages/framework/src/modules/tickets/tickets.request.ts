import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

import { TICKET_STATUS_VALUES, type TicketStatus } from './tickets.model';
import { PaginationQuery } from '@/utils/models/pagination';

/** Query params for fetching a single ticket. */
export class GetTicketParams {
    /** Ticket identifier. */
    @ApiProperty({ description: 'Ticket identifier.' })
    id!: string;
    /** Optional locale passed via query string (kept as string). */
    @ApiPropertyOptional({ description: 'Optional locale code used to localize response values.' })
    locale?: string;
}

/** Attachment input for ticket creation: filename, content, contentType. */
export class TicketAttachmentInput {
    /** Attachment filename. */
    @ApiProperty({ description: 'Attachment file name.' })
    filename!: string;
    /** Attachment binary content. */
    @ApiProperty({ description: 'Attachment binary content.' })
    content!: Buffer;
    /** MIME type of attachment content (e.g., 'application/pdf'). */
    @ApiProperty({ description: 'Attachment MIME type, for example `application/pdf`.' })
    contentType!: string; // e.g., 'application/pdf'
}

/** Request body for creating a new ticket. */
export class PostTicketBody {
    /** Ticket title. */
    @ApiPropertyOptional({ description: 'Ticket title.' })
    title?: string;
    /** Ticket description/details. */
    @ApiPropertyOptional({ description: 'Detailed ticket description.' })
    description?: string;
    /** Ticket type identifier. */
    @ApiPropertyOptional({ description: 'Ticket type identifier.' })
    type?: number;
    /** Optional attachment list (TicketAttachmentInput[]). */
    @ApiPropertyOptional({ description: 'Optional list of ticket attachments.' })
    attachments?: TicketAttachmentInput[];
    /** Additional custom fields map. */
    @ApiPropertyOptional({ description: 'Optional map of additional custom fields.', additionalProperties: true })
    fields?: Record<string, unknown>;
}

/** Query params for fetching a paginated ticket list. */
export class GetTicketListQuery extends PaginationQuery {
    /** Topic filter. */
    @ApiPropertyOptional({ description: 'Ticket topic filter.' })
    topic?: string;
    /** Ticket type filter. */
    @ApiPropertyOptional({ description: 'Ticket type filter.' })
    type?: string;
    /** One or many statuses to filter by. */
    @ApiPropertyOptional({
        description:
            'One or more ticket statuses to filter by. Use a single value or repeat the query parameter for multiple.',
        enum: TICKET_STATUS_VALUES,
        isArray: true,
    })
    status?: TicketStatus | TicketStatus[];
    /** Date range start from query string (kept as string). */
    @ApiPropertyOptional({ description: 'Date range start as ISO string.' })
    dateFrom?: string;
    /** Date range end from query string (kept as string). */
    @ApiPropertyOptional({ description: 'Date range end as ISO string.' })
    dateTo?: string;
    /** Sort expression from query string, e.g. `createdAt_DESC`. */
    @ApiPropertyOptional({ description: 'Sort expression from query string, for example `createdAt_DESC`.' })
    sort?: string;
    /** Free-text search phrase. */
    @ApiPropertyOptional({ description: 'Free-text search phrase.' })
    search?: string;
    /** Priority filter. */
    @ApiPropertyOptional({ description: 'Ticket priority filter.' })
    priority?: string;
    /** Optional locale passed via query string (kept as string). */
    @ApiPropertyOptional({ description: 'Optional locale code used to localize response values.' })
    locale?: string;
}
