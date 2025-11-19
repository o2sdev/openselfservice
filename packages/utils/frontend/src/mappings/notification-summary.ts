export type NotificationSummaryVariant = 'CRITICAL' | 'HIGH' | 'MEDIUM' | 'LOW';

export const notificationSummaryVariants: Record<NotificationSummaryVariant, string> = {
    CRITICAL: 'text-destructive',
    HIGH: 'text-destructive',
    MEDIUM: 'text-muted-foreground',
    LOW: 'text-muted-foreground',
};
