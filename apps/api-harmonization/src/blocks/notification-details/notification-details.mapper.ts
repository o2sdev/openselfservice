import { formatDateRelative } from '@o2s/api-harmonization/utils/date';

import { CMS, Notifications } from '../../models';

import { Notification, NotificationDetailsBlock } from './notification-details.model';

export const mapNotificationDetails = (
    notification: Notifications.Model.Notification,
    cms: CMS.Model.NotificationDetailsBlock.NotificationDetailsBlock,
    locale: string,
): NotificationDetailsBlock => {
    return {
        __typename: 'NotificationDetailsBlock',
        id: cms.id,
        data: mapNotification(notification, cms, locale),
    };
};

export const mapNotification = (
    notification: Notifications.Model.Notification,
    cms: CMS.Model.NotificationDetailsBlock.NotificationDetailsBlock,
    locale: string,
): Notification => {
    return {
        customField: notification.someNewField,
        id: {
            label: cms.fieldMapping.id?.[notification.id] || notification.id,
            title: cms.properties['id'] as string,
            value: notification.id,
        },
        title: {
            value: notification.title,
            title: cms.properties['title'] as string,
            label: cms.fieldMapping.title?.[notification.title] || notification.title,
        },
        content: {
            value: notification.content,
            title: cms.properties['content'] as string,
            label: cms.fieldMapping.content?.[notification.content] || notification.content,
        },
        type: {
            value: notification.type,
            title: cms.properties['type'] as string,
            label: cms.fieldMapping.type?.[notification.type] || notification.type,
        },
        status: {
            value: notification.status,
            title: cms.properties['status'] as string,
            label: cms.fieldMapping.status?.[notification.status] || notification.status,
        },
        priority: {
            value: notification.priority,
            title: cms.properties['priority'] as string,
            label: cms.fieldMapping.priority?.[notification.priority] || notification.priority,
        },
        createdAt: formatDateRelative(notification.createdAt, locale, cms.labels.today, cms.labels.yesterday),
        updatedAt: formatDateRelative(notification.updatedAt, locale, cms.labels.today, cms.labels.yesterday),
    };
};
