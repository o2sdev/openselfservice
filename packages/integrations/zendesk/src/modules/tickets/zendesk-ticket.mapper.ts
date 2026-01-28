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

    // Get consent field IDs from environment variables
    const consentFieldIds = [
        process.env.ZENDESK_TERMS_ACCEPTANCE_FIELD_ID ? Number(process.env.ZENDESK_TERMS_ACCEPTANCE_FIELD_ID) : null,
        process.env.ZENDESK_NEWSLETTER_CONSENT_FIELD_ID
            ? Number(process.env.ZENDESK_NEWSLETTER_CONSENT_FIELD_ID)
            : null,
        process.env.ZENDESK_MARKETING_CONSENT_FIELD_ID ? Number(process.env.ZENDESK_MARKETING_CONSENT_FIELD_ID) : null,
    ].filter((id): id is number => id !== null);

    // Check if this is CONTACT_US form by comparing ticket_form_id
    const contactFormId = process.env.ZENDESK_CONTACT_FORM_ID ? Number(process.env.ZENDESK_CONTACT_FORM_ID) : undefined;
    const isContactUsForm = ticket.ticket_form_id === contactFormId;

    // Map custom fields to properties using readable names from ZendeskFieldMapper
    if (ticket.custom_fields) {
        ticket.custom_fields.forEach((field) => {
            if (field.value !== null && field.value !== undefined) {
                const fieldKey = getFieldKeyById(field.id!);

                // Skip 'topic' field as it's already set as top-level property from custom_fields
                // to avoid duplicate/conflicting entries
                if (fieldKey && fieldKey.toLowerCase() !== 'topic') {
                    // For CONTACT_US form: show consent fields even if false
                    // For other forms: skip boolean fields with false value (unchecked checkboxes)
                    const isConsentField = consentFieldIds.includes(field.id!);
                    if (typeof field.value === 'boolean' && field.value === false) {
                        if (!isContactUsForm || !isConsentField) {
                            return;
                        }
                    }

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
