"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mapTicketSummary = void 0;
const mapTicketSummary = (cms, tickets, _locale) => {
    const statusCounts = tickets.data.reduce((acc, ticket) => {
        acc[ticket.status] = (acc[ticket.status] || 0) + 1;
        return acc;
    }, {});
    const infoCards = cms.infoCards.map((card) => ({
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
exports.mapTicketSummary = mapTicketSummary;
//# sourceMappingURL=ticket-summary.mapper.js.map