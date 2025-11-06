import { CMS } from '@o2s/framework/modules';

const MOCK_NOTIFICATION_SUMMARY_BLOCK_EN: CMS.Model.NotificationSummaryBlock.NotificationSummaryBlock = {
    id: 'notification-summary-1',
    title: 'Notification Summary',
};

const MOCK_NOTIFICATION_SUMMARY_BLOCK_DE: CMS.Model.NotificationSummaryBlock.NotificationSummaryBlock = {
    id: 'notification-summary-1',
    title: 'Benachrichtigungssumme',
};

const MOCK_NOTIFICATION_SUMMARY_BLOCK_PL: CMS.Model.NotificationSummaryBlock.NotificationSummaryBlock = {
    id: 'notification-summary-1',
    title: 'Suma powiadomień',
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
