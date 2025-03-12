import format from 'string-template';

import { formatDateRelative } from '@o2s/api-harmonization/utils/date';

import { CMS, Tickets } from '../../models';

import { Ticket, TicketRecentBlock } from './ticket-recent.model';

export const mapTicketRecent = (
    cms: CMS.Model.TicketRecentBlock.TicketRecentBlock,
    tickets: Tickets.Model.Tickets,
    locale: string,
): TicketRecentBlock => {
    return {
        __typename: 'TicketRecentBlock',
        id: cms.id,
        title: cms.title,
        noResults: cms.noResults,
        details: cms.labels.details,
        tickets: {
            data: tickets.data.map((ticket) => mapTicket(ticket, cms, locale)),
        },
    };
};

export const mapTicket = (
    ticket: Tickets.Model.Ticket,
    cms: CMS.Model.TicketRecentBlock.TicketRecentBlock,
    locale: string,
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
        createdAt: formatDateRelative(ticket.createdAt, locale, cms.labels.today, cms.labels.yesterday),
        updatedAt: formatDateRelative(ticket.updatedAt, locale, cms.labels.today, cms.labels.yesterday),
        detailsUrl: format(cms.detailsUrl, {
            id: ticket.id,
        }),
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
    };
};
