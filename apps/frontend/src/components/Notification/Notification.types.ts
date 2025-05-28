export type NotificationVariant = 'destructive' | 'positive' | 'default';

export interface NotificationProps {
    title: string;
    variant?: NotificationVariant;
    showIcon?: boolean;
}
