import { CMS } from '@o2s/framework/modules';

const MOCK_NOTIFICATION_SUMMARY_BLOCK_EN: CMS.Model.NotificationSummaryBlock.NotificationSummaryBlock = {
    id: 'notification-summary-1',
    title: 'Notification Summary',
    layout: 'horizontal',
    high: {
        title: 'High Priority',
        icon: 'AlertCircle',
        message: 'High priority notifications',
        altMessage: 'No high priority notifications',
    },
    medium: {
        title: 'Medium Priority',
        icon: 'AlertCircle',
        message: 'Medium priority notifications',
        altMessage: 'No medium priority notifications',
    },
    low: {
        title: 'Low Priority',
        icon: 'Info',
        message: 'Low priority notifications',
        altMessage: 'No low priority notifications',
    },
    critical: {
        title: 'Critical Priority',
        icon: 'AlertCircle',
        message: 'Critical priority notifications',
        altMessage: 'No critical priority notifications',
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
        altMessage: 'Keine Benachrichtigungen mit hoher Priorität',
    },
    medium: {
        title: 'Mittlere Priorität',
        icon: 'Info',
        message: 'Benachrichtigungen mit mittlerer Priorität',
        altMessage: 'Keine Benachrichtigungen mit mittlerer Priorität',
    },
    low: {
        title: 'Niedrige Priorität',
        icon: 'Info',
        message: 'Benachrichtigungen mit niedriger Priorität',
        altMessage: 'Keine Benachrichtigungen mit niedriger Priorität',
    },
    critical: {
        title: 'Kritische Priorität',
        icon: 'Info',
        message: 'Benachrichtigungen mit kritischer Priorität',
        altMessage: 'Keine Benachrichtigungen mit kritischer Priorität',
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
        altMessage: 'Brak powiadomień o wysokim priorytecie',
    },
    medium: {
        title: 'Średni priorytet',
        icon: 'Info',
        message: 'Powiadomienia o średnim priorytecie',
        altMessage: 'Brak powiadomień o średnim priorytecie',
    },
    low: {
        title: 'Niski priorytet',
        icon: 'Info',
        message: 'Powiadomienia o niskim priorytecie',
        altMessage: 'Brak powiadomień o niskim priorytecie',
    },
    critical: {
        title: 'Krytyczny priorytet',
        icon: 'Info',
        message: 'Powiadomienia o krytycznym priorytecie',
        altMessage: 'Brak powiadomień o krytycznym priorytecie',
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
