export type TicketSummaryVariant = 'OPEN' | 'IN_PROGRESS' | 'CLOSED';

export const ticketSummaryVariants: Record<TicketSummaryVariant, string> = {
    OPEN: 'text-muted-foreground',
    IN_PROGRESS: 'text-muted-foreground',
    CLOSED: 'text-muted-foreground',
};
