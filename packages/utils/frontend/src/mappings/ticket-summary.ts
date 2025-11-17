export type TicketSummaryVariant = 'OPEN' | 'IN_PROGRESS' | 'CLOSED';

export const ticketSummaryVariants: Record<TicketSummaryVariant, string> = {
    OPEN: 'text-badge-default-background',
    IN_PROGRESS: 'text-badge-secondary-background',
    CLOSED: 'text-muted-foreground',
};
