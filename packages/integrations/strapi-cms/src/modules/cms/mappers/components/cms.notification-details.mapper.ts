import { CMS } from '@o2s/framework/modules';

const MOCK_NOTIFICATION_DETAILS_COMPONENT: CMS.Model.NotificationDetailsComponent.NotificationDetailsComponent = {
    id: 'notification-details-1',
    fieldMapping: {
        type: {
            TYPE_1: 'Special offer',
            TYPE_2: 'Gamification',
            TYPE_3: 'Important news',
            TYPE_4: 'Appointment',
        },
        status: {
            UNVIEWED: 'Not viewed',
            VIEWED: 'Viewed',
            READ: 'Read',
        },
        priority: {
            low: 'Low Priority',
            medium: 'Medium Priority',
            high: 'High Priority',
            critical: 'Critical Priority',
        },
    },
    properties: {
        id: 'ID',
        title: 'Title',
        content: 'Content',
        type: 'Type',
        status: 'Status',
        priority: 'Priority',
        createdAt: 'Created At',
        updatedAt: 'Updated At',
    },
    labels: {
        today: 'Today',
        yesterday: 'Yesterday',
    },
};

export const mapNotificationDetailsComponent =
    (): CMS.Model.NotificationDetailsComponent.NotificationDetailsComponent => {
        return {
            ...MOCK_NOTIFICATION_DETAILS_COMPONENT,
        };
    };
