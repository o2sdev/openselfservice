import { CMS, Notifications } from '@o2s/configs.integrations';

import { NotificationSummaryBlock, NotificationSummaryInfoCard } from './notification-summary.model';

export const mapNotificationSummary = (
    cms: CMS.Model.NotificationSummaryBlock.NotificationSummaryBlock,
    notifications: Notifications.Model.Notifications,
    _locale: string,
): NotificationSummaryBlock => {
    const priorityCounts = notifications.data.reduce(
        (acc, notification) => {
            acc[notification.priority] = (acc[notification.priority] || 0) + 1;
            return acc;
        },
        {} as Record<'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL', number>,
    );

    const infoCards: NotificationSummaryInfoCard[] = [];

    if (cms.critical) {
        infoCards.push({
            title: cms.critical.title,
            icon: cms.critical.icon,
            value: priorityCounts.CRITICAL || 0,
            description: cms.critical.message,
            color: 'text-destructive',
        });
    }
    if (cms.high) {
        infoCards.push({
            title: cms.high.title,
            icon: cms.high.icon,
            value: priorityCounts.HIGH || 0,
            description: cms.high.message,
            color: 'text-destructive',
        });
    }
    if (cms.medium) {
        infoCards.push({
            title: cms.medium.title,
            icon: cms.medium.icon,
            value: priorityCounts.MEDIUM || 0,
            description: cms.medium.message,
            color: 'text-badge-secondary-background',
        });
    }
    if (cms.low) {
        infoCards.push({
            title: cms.low.title,
            icon: cms.low.icon,
            value: priorityCounts.LOW || 0,
            description: cms.low.message,
            color: 'text-muted-foreground',
        });
    }

    return {
        __typename: 'NotificationSummaryBlock',
        id: cms.id,
        layout: cms.layout,
        infoCards,
    };
};
