import { CMS } from '@o2s/configs.integrations';

import { Notifications } from '@o2s/framework/modules';

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
        {} as Record<Notifications.Model.NotificationPriority, number>,
    );

    const infoCards: NotificationSummaryInfoCard[] = cms.infoCards.map((card) => ({
        title: card.title,
        icon: card.icon,
        value: priorityCounts[card.variant] ?? card.value,
        description: card.description,
        variant: card.variant,
    }));

    return {
        __typename: 'NotificationSummaryBlock',
        id: cms.id,
        layout: cms.layout,
        infoCards,
    };
};
