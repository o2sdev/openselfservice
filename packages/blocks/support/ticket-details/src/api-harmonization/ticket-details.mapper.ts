import { CMS, Tickets } from '@o2s/configs.integrations';

import { Utils } from '@o2s/utils.api-harmonization';

import { Ticket, TicketDetailsBlock, TicketProperty } from './ticket-details.model';

export const mapTicketDetails = (
    ticket: Tickets.Model.Ticket,
    cms: CMS.Model.TicketDetailsBlock.TicketDetailsBlock,
    locale: string,
    timezone: string,
): TicketDetailsBlock => {
    return {
        __typename: 'TicketDetailsBlock',
        id: cms.id,
        data: mapTicket(ticket, cms, locale, timezone),
    };
};

export const mapTicket = (
    ticket: Tickets.Model.Ticket,
    cms: CMS.Model.TicketDetailsBlock.TicketDetailsBlock,
    locale: string,
    timezone: string,
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
        ...(ticket.type && cms.properties?.type && cms.fieldMapping.type
            ? {
                  type: {
                      label: cms.fieldMapping.type[ticket.type] || ticket.type,
                      title: cms.properties.type as string,
                      value: ticket.type,
                  },
              }
            : {}),
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

                // Check if there's a fieldMapping for this property to translate the value
                const fieldMapping = cms.fieldMapping[property.id as keyof typeof cms.fieldMapping];
                const mappedValue =
                    fieldMapping && typeof fieldMapping === 'object'
                        ? (fieldMapping as Record<string, string>)[property.value] || property.value
                        : property.value;

                return [
                    ...prev,
                    {
                        id: property.id,
                        value: mappedValue,
                        label: field,
                    },
                ];
            }, [] as TicketProperty[]),
        },
        createdAt: Utils.Date.formatDateRelative(
            ticket.createdAt,
            locale,
            cms.labels.today,
            cms.labels.yesterday,
            timezone,
        ),
        updatedAt: Utils.Date.formatDateRelative(
            ticket.updatedAt,
            locale,
            cms.labels.today,
            cms.labels.yesterday,
            timezone,
        ),
        comments: {
            title: cms.commentsTitle,
            items:
                ticket.comments?.map((comment) => ({
                    ...comment,
                    date: Utils.Date.formatDateRelative(
                        comment.date,
                        locale,
                        cms.labels.today,
                        cms.labels.yesterday,
                        timezone,
                    ),
                    author: comment.author,
                })) || [],
        },
        attachments: {
            title: cms.attachmentsTitle,
            items:
                ticket.attachments?.map((attachment) => ({
                    ...attachment,
                    date: Utils.Date.formatDateRelative(
                        attachment.date,
                        locale,
                        cms.labels.today,
                        cms.labels.yesterday,
                        timezone,
                    ),
                    author: attachment.author,
                    ariaLabel: attachment.ariaLabel,
                })) || [],
        },
    };
};
