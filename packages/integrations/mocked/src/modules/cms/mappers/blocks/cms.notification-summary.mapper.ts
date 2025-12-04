import { CMS } from '@o2s/framework/modules';

const MOCK_NOTIFICATION_SUMMARY_BLOCK_EN: CMS.Model.NotificationSummaryBlock.NotificationSummaryBlock = {
    id: 'notification-summary-1',
    layout: 'horizontal',
    infoCards: [
        {
            title: 'Critical Priority',
            icon: 'AlertCircle',
            description: 'Critical priority notifications',
            variant: 'CRITICAL',
            value: 0,
        },
        {
            title: 'High Priority',
            icon: 'AlertCircle',
            description: 'High priority notifications',
            variant: 'HIGH',
            value: 0,
        },
        {
            title: 'Medium Priority',
            icon: 'AlertCircle',
            description: 'Medium priority notifications',
            variant: 'MEDIUM',
            value: 0,
        },
        {
            title: 'Low Priority',
            icon: 'AlertCircle',
            description: 'Low priority notifications',
            variant: 'LOW',
            value: 0,
        },
    ],
};

const MOCK_NOTIFICATION_SUMMARY_BLOCK_DE: CMS.Model.NotificationSummaryBlock.NotificationSummaryBlock = {
    id: 'notification-summary-1',
    layout: 'horizontal',
    infoCards: [
        {
            title: 'Kritische Priorität',
            icon: 'AlertCircle',
            description: 'Benachrichtigungen mit kritischer Priorität',
            variant: 'CRITICAL',
            value: 0,
        },
        {
            title: 'Hohe Priorität',
            icon: 'AlertCircle',
            description: 'Benachrichtigungen mit hoher Priorität',
            variant: 'HIGH',
            value: 0,
        },
        {
            title: 'Mittlere Priorität',
            icon: 'AlertCircle',
            description: 'Benachrichtigungen mit mittlerer Priorität',
            variant: 'MEDIUM',
            value: 0,
        },
        {
            title: 'Niedrige Priorität',
            icon: 'AlertCircle',
            description: 'Benachrichtigungen mit niedriger Priorität',
            variant: 'LOW',
            value: 0,
        },
    ],
};

const MOCK_NOTIFICATION_SUMMARY_BLOCK_PL: CMS.Model.NotificationSummaryBlock.NotificationSummaryBlock = {
    id: 'notification-summary-1',
    layout: 'horizontal',
    infoCards: [
        {
            title: 'Krytyczny priorytet',
            icon: 'AlertCircle',
            description: 'Powiadomienia o krytycznym priorytecie',
            variant: 'CRITICAL',
            value: 0,
        },
        {
            title: 'Wysoki priorytet',
            icon: 'AlertCircle',
            description: 'Powiadomienia o wysokim priorytecie',
            variant: 'HIGH',
            value: 0,
        },
        {
            title: 'Średni priorytet',
            icon: 'AlertCircle',
            description: 'Powiadomienia o średnim priorytecie',
            variant: 'MEDIUM',
            value: 0,
        },
        {
            title: 'Niski priorytet',
            icon: 'AlertCircle',
            description: 'Powiadomienia o niskim priorytecie',
            variant: 'LOW',
            value: 0,
        },
    ],
};

export const mapNotificationSummaryBlock = (
    locale: string,
): CMS.Model.NotificationSummaryBlock.NotificationSummaryBlock => {
    switch (locale) {
        case 'de':
            return MOCK_NOTIFICATION_SUMMARY_BLOCK_DE;
        case 'pl':
            return MOCK_NOTIFICATION_SUMMARY_BLOCK_PL;
        default:
            return MOCK_NOTIFICATION_SUMMARY_BLOCK_EN;
    }
};
