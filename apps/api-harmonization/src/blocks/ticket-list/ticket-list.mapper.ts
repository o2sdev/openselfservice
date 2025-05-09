import format from 'string-template';

import { formatDateRelative } from '@o2s/api-harmonization/utils/date';

import { CMS, Tickets } from '../../models';

import { ActionLink, Ticket, TicketListBlock } from './ticket-list.model';

export const mapTicketList = (
    tickets: Tickets.Model.Tickets,
    cms: CMS.Model.TicketListBlock.TicketListBlock,
    locale: string,
    timezone: string,
): TicketListBlock => {
    return {
        __typename: 'TicketListBlock',
        id: cms.id,
        title: cms.title,
        subtitle: cms.subtitle,
        table: cms.table,
        pagination: cms.pagination,
        filters: cms.filters,
        noResults: cms.noResults,
        tickets: {
            total: tickets.total,
            data: tickets.data.map((ticket) => mapTicket(ticket, cms, locale, timezone)),
        },
        actionLinks: mapActionLinks(cms.actionLinks),
        labels: cms.labels,
    };
};

const mapActionLinks = (actionLinks: CMS.Model.TicketListBlock.ActionLink[] | undefined): ActionLink[] | undefined => {
    if (!actionLinks) {
        return undefined;
    }

    return actionLinks.map((actionLink) => ({
        label: actionLink.label,
        visible: actionLink.visible ?? false,
        slug: actionLink.slug,
        icon: actionLink.icon,
    }));
};

export const mapTicket = (
    ticket: Tickets.Model.Ticket,
    cms: CMS.Model.TicketListBlock.TicketListBlock,
    locale: string,
    timezone: string,
): Ticket => {
    return {
        id: ticket.id,
        topic: {
            label: cms.fieldMapping.topic?.[ticket.topic] || ticket.topic,
            value: ticket.topic,
        },
        type: {
            label: cms.fieldMapping.type?.[ticket.type] || ticket.type,
            value: ticket.type,
        },
        status: {
            label: cms.fieldMapping.status?.[ticket.status] || ticket.status,
            value: ticket.status,
        },
        createdAt: formatDateRelative(ticket.createdAt, locale, cms.labels.today, cms.labels.yesterday, timezone),
        updatedAt: formatDateRelative(ticket.updatedAt, locale, cms.labels.today, cms.labels.yesterday, timezone),
        detailsUrl: format(cms.detailsUrl, {
            id: ticket.id,
        }),
    };
};
