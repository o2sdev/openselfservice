import { CMS, Tickets } from '@o2s/configs.integrations';
import format from 'string-template';

import { Utils } from '@o2s/utils.api-harmonization';

import { Ticket, TicketListBlock } from './ticket-list.model';

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
        forms: cms.forms,
        labels: cms.labels,
        initialFilters: cms.initialFilters,
        meta: cms.meta,
        slots: cms.slots,
    };
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
    };
};
