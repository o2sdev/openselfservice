import { CMS, Tickets } from '@o2s/configs.integrations';
import format from 'string-template';

import { Utils } from '@o2s/utils.api-harmonization';

import { Ticket, TicketRecentBlock } from './ticket-recent.model';

export const mapTicketRecent = (
    cms: CMS.Model.TicketRecentBlock.TicketRecentBlock,
    tickets: Tickets.Model.Tickets,
    locale: string,
    timezone: string,
): TicketRecentBlock => {
    return {
        __typename: 'TicketRecentBlock',
        id: cms.id,
        title: cms.title,
        noResults: cms.noResults,
        details: cms.labels.details,
        tickets: {
            data: tickets.data.map((ticket) => mapTicket(ticket, cms, locale, timezone)),
        },
    };
};

export const mapTicket = (
    ticket: Tickets.Model.Ticket,
    cms: CMS.Model.TicketRecentBlock.TicketRecentBlock,
    locale: string,
    timezone: string,
): Ticket => {
    return {
        id: {
            value: ticket.id,
        },
        topic: {
            value: ticket.topic,
        },
        type: {
            value: ticket.type,
        },
        status: {
            value: ticket.status,
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
        detailsUrl: format(cms.detailsUrl, {
            id: ticket.id,
        }),
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
    };
};
