import { formatDateRelative } from '@o2s/api-harmonization/utils/date';

import { CMS, Tickets } from '../../models';

import { Ticket, TicketDetailsComponent, TicketProperty } from './ticket-details.model';

export const mapTicketDetails = (
    ticket: Tickets.Model.Ticket,
    cms: CMS.Model.TicketDetailsComponent.TicketDetailsComponent,
    locale: string,
): TicketDetailsComponent => {
    return {
        __typename: 'TicketDetailsComponent',
        id: cms.id,
        data: mapTicket(ticket, cms, locale),
    };
};

export const mapTicket = (
    ticket: Tickets.Model.Ticket,
    cms: CMS.Model.TicketDetailsComponent.TicketDetailsComponent,
    locale: string,
): Ticket => {
    return {
        id: {
            label: cms.fieldMapping.id?.[ticket.id] || ticket.id,
            title: cms.properties?.id as string,
            value: ticket.id,
        },
        topic: {
            label: cms.fieldMapping.topic?.[ticket.topic] || ticket.topic,
            title: cms.properties?.topic as string,
            value: ticket.topic,
        },
        type: {
            label: cms.fieldMapping.type?.[ticket.type] || ticket.type,
            title: cms.properties?.type as string,
            value: ticket.type,
        },
        status: {
            label: cms.fieldMapping.status?.[ticket.status] || ticket.status,
            title: cms.properties?.status as string,
            value: ticket.status,
        },
        properties: {
            title: cms.title,
            items: ticket.properties.reduce((prev, property): TicketProperty[] => {
                const field = cms.properties?.[property.id];

                if (!field) {
                    return prev;
                }

                return [
                    ...prev,
                    {
                        id: property.id,
                        value: property.value,
                        label: field,
                    },
                ];
            }, [] as TicketProperty[]),
        },
        createdAt: formatDateRelative(ticket.createdAt, locale, cms.labels.today, cms.labels.yesterday),
        updatedAt: formatDateRelative(ticket.updatedAt, locale, cms.labels.today, cms.labels.yesterday),
        comments: {
            title: cms.commentsTitle,
            items:
                ticket.comments?.map((comment) => ({
                    ...comment,
                    date: formatDateRelative(comment.date, locale, cms.labels.today, cms.labels.yesterday),
                    author: {
                        ...comment.author,
                        initials: comment.author.name
                            .split(' ')
                            .map((name) => name[0])
                            .join('')
                            .toUpperCase(),
                    },
                })) || [],
        },
        attachments: {
            title: cms.attachmentsTitle,
            items:
                ticket.attachments?.map((attachment) => ({
                    ...attachment,
                    date: formatDateRelative(attachment.date, locale, cms.labels.today, cms.labels.yesterday),
                    author: {
                        ...attachment.author,
                        initials: attachment.author.name
                            .split(' ')
                            .map((name) => name[0])
                            .join('')
                            .toUpperCase(),
                    },
                    ariaLabel: attachment.ariaLabel,
                })) || [],
        },
    };
};
