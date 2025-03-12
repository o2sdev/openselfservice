import format from 'string-template';

import { formatDateRelative } from '@o2s/api-harmonization/utils/date';

import { CMS, Notifications } from '../../models';

import { Notification, NotificationListBlock } from './notification-list.model';

export const mapNotificationList = (
    notifications: Notifications.Model.Notifications,
    cms: CMS.Model.NotificationListBlock.NotificationListBlock,
    locale: string,
): NotificationListBlock => {
    return {
        __typename: 'NotificationListBlock',
        id: cms.id,
        title: cms.title,
        subtitle: cms.subtitle,
        table: cms.table,
        pagination: cms.pagination,
        filters: cms.filters,
        noResults: cms.noResults,
        notifications: {
            total: notifications.total,
            data: notifications.data.map((notification) => mapNotification(notification, cms, locale)),
        },
    };
};

export const mapNotification = (
    notification: Notifications.Model.Notification,
    cms: CMS.Model.NotificationListBlock.NotificationListBlock,
    locale: string,
): Notification => {
    return {
        id: notification.id,
        title: notification.title,
        type: {
            label: cms.fieldMapping.type?.[notification.type] || notification.type,
            value: notification.type,
        },
        status: {
            label: cms.fieldMapping.status?.[notification.status] || notification.status,
            value: notification.status,
        },
        priority: {
            label: cms.fieldMapping.priority?.[notification.priority] || notification.priority,
            value: notification.priority,
        },
        createdAt: formatDateRelative(notification.createdAt, locale, cms.labels.today, cms.labels.yesterday),
        updatedAt: formatDateRelative(notification.updatedAt, locale, cms.labels.today, cms.labels.yesterday),
        detailsUrl: format(cms.detailsUrl, {
            id: notification.id,
        }),
    };
};
