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
        {} as Record<Tickets.Model.TicketStatus, number>,
    );

    const infoCards: TicketSummaryInfoCard[] = cms.infoCards.map((card) => ({
        title: card.title,
        icon: card.icon,
        value: card.variant ? (statusCounts[card.variant] ?? card.value) : card.value,
        description: card.description,
        variant: card.variant,
    }));

    return {
        __typename: 'TicketSummaryBlock',
        id: cms.id,
        layout: cms.layout,
        infoCards,
    };
};
