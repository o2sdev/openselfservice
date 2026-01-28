import { Tickets } from '@o2s/framework/modules';

import { type TicketCommentObject, type TicketObject, type UserObject } from '@/generated/zendesk';

import { getFieldKeyById } from './zendesk-field.mapper';

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

    // Determine topic from custom field if configured
    const topicFieldId = process.env.ZENDESK_TOPIC_FIELD_ID ? Number(process.env.ZENDESK_TOPIC_FIELD_ID) : undefined;

    let topic: string | undefined;
    if (topicFieldId && ticket.custom_fields) {
        const topicField = ticket.custom_fields.find((field) => field.id === topicFieldId);
        if (topicField?.value) {
            topic = String(topicField.value).toUpperCase();
        }
    }

    if (!topic) {
        throw new Error(
            `Topic field not found or empty for ticket ${ticket.id}. ` +
                `Ensure ZENDESK_TOPIC_FIELD_ID is configured and ticket has a topic value.`,
        );
    }

    const properties: Tickets.Model.TicketProperty[] = [
        { id: 'subject', value: ticket.subject || '' },
        { id: 'description', value: ticket.description || '' },
    ];

    // Map custom fields to properties using readable names from ZendeskFieldMapper
    if (ticket.custom_fields) {
        ticket.custom_fields.forEach((field) => {
            if (field.value !== null && field.value !== undefined) {
                const fieldKey = getFieldKeyById(field.id!);

                // Skip 'topic' field as it's already set as top-level property from custom_fields
                // to avoid duplicate/conflicting entries
                if (fieldKey && fieldKey.toLowerCase() !== 'topic') {
                    properties.push({
                        id: fieldKey,
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
        status,
        properties,
        comments: mappedComments.length > 0 ? mappedComments : undefined,
        attachments: attachments.length > 0 ? attachments : undefined,
    };
}
