import { Tickets } from '@o2s/framework/modules';

import { type TicketObject } from '@/generated/zendesk';

type ZendeskTicket = TicketObject;

export interface ZendeskComment {
    id?: number;
    author_id?: number;
    body?: string;
    created_at?: string;
    public?: boolean;
    attachments?: Array<{
        id?: number;
        file_name?: string;
        content_url?: string;
        content_type?: string;
        size?: number;
    }>;
}

export function mapTicketToModel(ticket: ZendeskTicket, comments: ZendeskComment[] = []): Tickets.Model.Ticket {
    let status: Tickets.Model.TicketStatus = 'OPEN';
    switch (ticket.status) {
        case 'closed':
        case 'solved':
            status = 'CLOSED';
            break;
        case 'pending':
        case 'hold':
            status = 'IN_PROGRESS';
            break;
        default:
            status = 'OPEN';
    }

    let topic = 'GENERAL';
    const properties: Tickets.Model.TicketProperty[] = [
        { id: 'subject', value: ticket.subject || '' },
        { id: 'description', value: ticket.description || '' },
    ];

    if (ticket.custom_fields) {
        ticket.custom_fields.forEach((field) => {
            if (field.value !== null && field.value !== undefined) {
                if (field.id === 27720325153053) {
                    topic = String(field.value).toUpperCase();
                } else {
                    properties.push({
                        id: `custom_field_${field.id}`,
                        value: String(field.value),
                    });
                }
            }
        });
    }

    const mappedComments = comments.map((comment) => ({
        author: {
            name: `User ${comment.author_id}`,
            email: '',
        },
        date: comment.created_at || '',
        content: comment.body || '',
    }));

    const attachments: Tickets.Model.TicketAttachment[] = [];
    comments.forEach((comment) => {
        if (comment.attachments && comment.attachments.length > 0) {
            comment.attachments.forEach((attachment) => {
                attachments.push({
                    name: attachment.file_name || '',
                    url: attachment.content_url || '',
                    size: attachment.size || 0,
                    author: {
                        name: `User ${comment.author_id}`,
                        email: '',
                    },
                    date: comment.created_at || '',
                    ariaLabel: `Download ${attachment.file_name || 'attachment'}`,
                });
            });
        }
    });

    return {
        id: ticket.id?.toString() || '',
        createdAt: ticket.created_at || '',
        updatedAt: ticket.updated_at || '',
        topic,
        type: (ticket.priority || 'NORMAL').toUpperCase(),
        status,
        properties,
        comments: mappedComments.length > 0 ? mappedComments : undefined,
        attachments: attachments.length > 0 ? attachments : undefined,
    };
}
