import { Tickets } from '@o2s/framework/modules';

import { MOCK_TICKETS_DE, MOCK_TICKETS_EN, MOCK_TICKETS_PL } from './tickets.mocks';

export const mapTicket = (id: string, locale?: string): Tickets.Model.Ticket | undefined => {
    if (locale === 'pl') {
        return MOCK_TICKETS_PL.find((ticket) => ticket.id === id);
    } else if (locale === 'de') {
        return MOCK_TICKETS_DE.find((ticket) => ticket.id === id);
    }
    return MOCK_TICKETS_EN.find((ticket) => ticket.id === id);
};

export const mapTickets = (options: Tickets.Request.GetTicketListQuery): Tickets.Model.Tickets => {
    const { offset = 0, limit = 10, locale } = options;
    let ticketsSource = MOCK_TICKETS_EN;
    if (locale === 'pl') {
        ticketsSource = MOCK_TICKETS_PL;
    } else if (locale === 'de') {
        ticketsSource = MOCK_TICKETS_DE;
    }

    let items = ticketsSource.filter(
        (item) =>
            (!options.topic || item.topic === options.topic) &&
            (!options.type || item.type === options.type) &&
            (!options.status || item.status === options.status) &&
            (!options.dateFrom || new Date(item.createdAt) >= new Date(options.dateFrom)) &&
            (!options.dateTo || new Date(item.createdAt) <= new Date(options.dateTo)) &&
            (!options.dateFrom || new Date(item.updatedAt) >= new Date(options.dateFrom)) &&
            (!options.dateTo || new Date(item.updatedAt) <= new Date(options.dateTo)),
    );

    if (options.sort) {
        const [field, order] = options.sort.split('_');
        const isAscending = order === 'ASC';

        items = items.sort((a, b) => {
            const aValue = a[field as keyof Tickets.Model.Ticket];
            const bValue = b[field as keyof Tickets.Model.Ticket];

            if (typeof aValue === 'string' && typeof bValue === 'string') {
                return isAscending ? aValue.localeCompare(bValue) : bValue.localeCompare(aValue);
            } else if (field === 'createdAt' || field === 'updatedAt') {
                const aDate = new Date(aValue as string);
                const bDate = new Date(bValue as string);
                return isAscending ? aDate.getTime() - bDate.getTime() : bDate.getTime() - aDate.getTime();
            }
            return 0;
        });
    }

    return {
        data: items.slice(offset, Number(offset) + Number(limit)),
        total: items.length,
    };
};
