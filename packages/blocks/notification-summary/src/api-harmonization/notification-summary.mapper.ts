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

    const infoCards: NotificationSummaryInfoCard[] = [];

    const priorities = ['CRITICAL', 'HIGH', 'MEDIUM', 'LOW'] as Notifications.Model.NotificationPriority[];

    priorities.forEach((priority) => {
        const cmsPriorityData =
            cms[
                priority.toLowerCase() as keyof Pick<
                    CMS.Model.NotificationSummaryBlock.NotificationSummaryBlock,
                    'low' | 'critical' | 'high' | 'medium'
                >
            ];

        if (cmsPriorityData) {
            infoCards.push({
                title: cmsPriorityData.title,
                icon: cmsPriorityData.icon,
                value: priorityCounts[priority] || 0,
                description: cmsPriorityData.message,
                variant: priority,
            });
        }
    });

    return {
        __typename: 'NotificationSummaryBlock',
        id: cms.id,
        layout: cms.layout,
        infoCards,
    };
};
