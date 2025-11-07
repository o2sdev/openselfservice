import { CMS, Tickets } from '@o2s/configs.integrations';

import { TicketSummaryBlock, TicketSummaryInfoCard } from './ticket-summary.model';

export const mapTicketSummary = (
    cms: CMS.Model.TicketSummaryBlock.TicketSummaryBlock,
    tickets: Tickets.Model.Tickets,
    _locale: string,
): TicketSummaryBlock => {
    const statusCounts = tickets.data.reduce(
        (acc, ticket) => {
            acc[ticket.status] = (acc[ticket.status] || 0) + 1;
            return acc;
        },
        {} as Record<'OPEN' | 'IN_PROGRESS' | 'CLOSED', number>,
    );

    const infoCards: TicketSummaryInfoCard[] = [];

    if (cms.open) {
        infoCards.push({
            title: cms.open.title,
            icon: cms.open.icon,
            value: statusCounts.OPEN || 0,
            description: cms.open.message,
            color: 'text-badge-default-background',
        });
    }
    if (cms.inProgress) {
        infoCards.push({
            title: cms.inProgress.title,
            icon: cms.inProgress.icon,
            value: statusCounts.IN_PROGRESS || 0,
            description: cms.inProgress.message,
            color: 'text-badge-secondary-background',
        });
    }
    if (cms.closed) {
        infoCards.push({
            title: cms.closed.title,
            icon: cms.closed.icon,
            value: statusCounts.CLOSED || 0,
            description: cms.closed.message,
            color: 'text-muted-foreground',
        });
    }

    return {
        __typename: 'TicketSummaryBlock',
        id: cms.id,
        layout: cms.layout,
        infoCards,
    };
};
