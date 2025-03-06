import { Notifications } from '@o2s/framework/modules';

import { MOCK_NOTIFICATIONS_DE, MOCK_NOTIFICATIONS_EN, MOCK_NOTIFICATIONS_PL } from './notifications.mocks';
import * as CustomNotifications from './notifications.model';

export const mapNotification = (id: string, locale = 'en'): CustomNotifications.Notification | undefined => {
    const notificationsMap = {
        en: MOCK_NOTIFICATIONS_EN,
        pl: MOCK_NOTIFICATIONS_PL,
        de: MOCK_NOTIFICATIONS_DE,
    };

    return notificationsMap[locale as keyof typeof notificationsMap]?.find((notification) => notification.id === id);
};

export const mapNotifications = (
    options: Notifications.Request.GetNotificationListQuery,
): CustomNotifications.Notifications => {
    const { offset = 0, limit = 10, locale = 'en' } = options;

    // Get notifications for the specified locale or fallback to English
    const notificationsMap = {
        en: MOCK_NOTIFICATIONS_EN,
        pl: MOCK_NOTIFICATIONS_PL,
        de: MOCK_NOTIFICATIONS_DE,
    };
    const localeNotifications = notificationsMap[locale as keyof typeof notificationsMap] || MOCK_NOTIFICATIONS_EN;

    let filteredNotifications = localeNotifications.filter(
        (notification) =>
            (!options.type || notification.type === options.type) &&
            (!options.priority || notification.priority === options.priority) &&
            (!options.status || notification.status === options.status) &&
            (!options.dateFrom || new Date(notification.createdAt) >= new Date(options.dateFrom)) &&
            (!options.dateTo || new Date(notification.createdAt) <= new Date(options.dateTo)) &&
            (!options.dateFrom || new Date(notification.updatedAt) >= new Date(options.dateFrom)) &&
            (!options.dateTo || new Date(notification.updatedAt) <= new Date(options.dateTo)),
    );

    if (options.sort) {
        const [field, order] = options.sort.split('_');
        const isAscending = order === 'ASC';

        filteredNotifications = filteredNotifications.sort((a, b) => {
            const aValue = a[field as keyof CustomNotifications.Notification];
            const bValue = b[field as keyof CustomNotifications.Notification];

            if (typeof aValue === 'string' && typeof bValue === 'string') {
                return isAscending ? aValue.localeCompare(bValue) : bValue.localeCompare(aValue);
            } else if (field === 'createdAt' || field === 'updatedAt') {
                const aDate = new Date(aValue);
                const bDate = new Date(bValue);
                return isAscending ? aDate.getTime() - bDate.getTime() : bDate.getTime() - aDate.getTime();
            }
            return 0;
        });
    }

    return {
        data: filteredNotifications.slice(offset, Number(offset) + Number(limit)),
        total: filteredNotifications.length,
    };
};
