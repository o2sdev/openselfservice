import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

import { Pagination } from '@/utils/models';

/** Allowed ticket status values (OpenAPI enum + single source for TS union). */
export const TICKET_STATUS_VALUES = ['OPEN', 'CLOSED', 'IN_PROGRESS'] as const;

/** Ticket lifecycle status (string union, not TS enum). */
export type TicketStatus = (typeof TICKET_STATUS_VALUES)[number];

/** Ticket property: id, value. */
export class TicketProperty {
    @ApiProperty({ description: 'Property identifier' })
    id!: string;

    @ApiProperty({ description: 'Property value' })
    value!: string;
}

/** Author: name, email, avatar. */
export class Author {
    @ApiProperty({ description: 'Author display name' })
    name!: string;

    @ApiPropertyOptional({ description: 'Author email address' })
    email?: string;

    @ApiPropertyOptional({ description: 'URL to author avatar image' })
    avatar?: string;
}

/** Ticket attachment: file metadata with author. */
export class TicketAttachment {
    @ApiProperty({ description: 'Attachment file name' })
    name!: string;

    @ApiProperty({ description: 'URL to download the attachment' })
    url!: string;

    @ApiProperty({ description: 'File size in bytes' })
    size!: number;

    @ApiProperty({ description: 'User who uploaded the attachment', type: () => Author })
    author!: Author;

    @ApiProperty({ description: 'Upload date in ISO 8601 format' })
    date!: string;

    @ApiProperty({ description: 'Accessible label for screen readers' })
    ariaLabel!: string;
}

/** Ticket comment: author, date, content. */
export class TicketComment {
    @ApiProperty({ description: 'Comment author', type: () => Author })
    author!: Author;

    @ApiProperty({ description: 'Comment date in ISO 8601 format' })
    date!: string;

    @ApiProperty({ description: 'Comment text content' })
    content!: string;
}

/** Ticket: id, topic, type, status, properties, attachments, comments. */
export class Ticket {
    @ApiProperty({ description: 'Unique ticket identifier' })
    id!: string;

    @ApiProperty({ description: 'Ticket creation timestamp in ISO 8601 format' })
    createdAt!: string;

    @ApiProperty({ description: 'Last update timestamp in ISO 8601 format' })
    updatedAt!: string;

    @ApiProperty({ description: 'Ticket subject/topic' })
    topic!: string;

    @ApiPropertyOptional({ description: 'Ticket type/category' })
    type?: string;

    @ApiProperty({ description: 'Current ticket status', enum: TICKET_STATUS_VALUES })
    status!: TicketStatus;

    @ApiProperty({ description: 'Custom ticket properties', type: () => [TicketProperty] })
    properties!: TicketProperty[];

    @ApiPropertyOptional({ description: 'Attached files', type: () => [TicketAttachment] })
    attachments?: TicketAttachment[];

    @ApiPropertyOptional({ description: 'Ticket conversation thread', type: () => [TicketComment] })
    comments?: TicketComment[];
}

/** Paginated ticket list for OpenAPI schema. */
export class PaginatedTickets extends Pagination.Paginated<Ticket> {
    @ApiProperty({ description: 'Array of tickets', type: () => [Ticket] })
    declare data: Ticket[];

    @ApiProperty({ description: 'Total number of tickets matching the query' })
    declare total: number;
}

/** @deprecated Use PaginatedTickets class for OpenAPI compatibility. */
export type Tickets = Pagination.Paginated<Ticket>;
