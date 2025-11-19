import { CMS } from '@o2s/framework/modules';

const MOCK_NOTIFICATION_SUMMARY_BLOCK_EN: CMS.Model.NotificationSummaryBlock.NotificationSummaryBlock = {
    id: 'notification-summary-1',
    title: 'Notification Summary',
    layout: 'horizontal',
    high: {
        title: 'High Priority',
        icon: 'AlertCircle',
        message: 'High priority notifications',
    },
    medium: {
        title: 'Medium Priority',
        icon: 'AlertCircle',
        message: 'Medium priority notifications',
    },
    low: {
        title: 'Low Priority',
        icon: 'AlertCircle',
        message: 'Low priority notifications',
    },
    critical: {
        title: 'Critical Priority',
        icon: 'AlertCircle',
        message: 'Critical priority notifications',
    },
};

const MOCK_NOTIFICATION_SUMMARY_BLOCK_DE: CMS.Model.NotificationSummaryBlock.NotificationSummaryBlock = {
    id: 'notification-summary-1',
    title: 'Benachrichtigungssumme',
    layout: 'horizontal',
    high: {
        title: 'Hohe Priorität',
        icon: 'AlertCircle',
        message: 'Benachrichtigungen mit hoher Priorität',
    },
    medium: {
        title: 'Mittlere Priorität',
        icon: 'AlertCircle',
        message: 'Benachrichtigungen mit mittlerer Priorität',
    },
    low: {
        title: 'Niedrige Priorität',
        icon: 'AlertCircle',
        message: 'Benachrichtigungen mit niedriger Priorität',
    },
    critical: {
        title: 'Kritische Priorität',
        icon: 'AlertCircle',
        message: 'Benachrichtigungen mit kritischer Priorität',
    },
};

const MOCK_NOTIFICATION_SUMMARY_BLOCK_PL: CMS.Model.NotificationSummaryBlock.NotificationSummaryBlock = {
    id: 'notification-summary-1',
    title: 'Suma powiadomień',
    layout: 'horizontal',
    high: {
        title: 'Wysoki priorytet',
        icon: 'AlertCircle',
        message: 'Powiadomienia o wysokim priorytecie',
    },
    medium: {
        title: 'Średni priorytet',
        icon: 'AlertCircle',
        message: 'Powiadomienia o średnim priorytecie',
    },
    low: {
        title: 'Niski priorytet',
        icon: 'AlertCircle',
        message: 'Powiadomienia o niskim priorytecie',
    },
    critical: {
        title: 'Krytyczny priorytet',
        icon: 'AlertCircle',
        message: 'Powiadomienia o krytycznym priorytecie',
    },
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
