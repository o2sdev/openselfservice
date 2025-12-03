import { Tickets } from '@o2s/framework/modules';

import { type TicketCommentObject, type TicketObject, type UserObject } from '@/generated/zendesk';

type ZendeskTicket = TicketObject;

export function mapTicketToModel(
    ticket: ZendeskTicket,
    comments: TicketCommentObject[] = [],
    authorMap?: Map<number, UserObject>,
): Tickets.Model.Ticket {
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
        const topicFieldId = Number(process.env.ZENDESK_TOPIC_FIELD_ID || 0);

        if (!topicFieldId) {
            throw new Error('ZENDESK_TOPIC_FIELD_ID is required when ticket.custom_fields are present.');
        }

        ticket.custom_fields.forEach((field) => {
            if (field.value !== null && field.value !== undefined) {
                if (topicFieldId && field.id === topicFieldId) {
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

    const mappedComments = comments.map((comment) => {
        const author = authorMap?.get(comment.author_id!);
        return {
            author: {
                name: author?.name || String(comment.author_id || ''),
                email: author?.email || '',
            },
            date: comment.created_at || '',
            content: comment.body || '',
        };
    });

    const attachments: Tickets.Model.TicketAttachment[] = [];
    comments.forEach((comment) => {
        if (comment.attachments && comment.attachments.length > 0) {
            const author = authorMap?.get(comment.author_id!);
            comment.attachments.forEach((attachment) => {
                attachments.push({
                    name: attachment.file_name || '',
                    url: attachment.content_url || '',
                    size: attachment.size || 0,
                    author: {
                        name: author?.name || String(comment.author_id || ''),
                        email: author?.email || '',
                    },
                    date: comment.created_at || '',
                    ariaLabel: attachment.file_name || 'attachment',
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
