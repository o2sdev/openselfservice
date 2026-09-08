import { CMS } from '@o2s/framework/modules';

import { notificationListPage } from './notification-list.page';
import { Roles } from '@/utils/roles';

export const notificationDetailsPage = CMS.Pages.definePage({
    id: '6',
    parent: notificationListPage,
    roles: [Roles.PROSPECT, Roles.ORG_USER, Roles.ORG_ADMIN],
    hasOwnTitle: true,
    locales: {
        en: { slug: '/notifications/:id', seo: { title: 'Notification Details', description: 'Notification Details' } },
        pl: { slug: '/powiadomienia/:id', seo: { title: 'Powiadomienia', description: 'Powiadomienia' } },
        de: {
            slug: '/benachrichtigungen/:id',
            seo: { title: 'Benachrichtigung Details', description: 'Benachrichtigung Details' },
        },
    },
    template: {
        __typename: 'OneColumnTemplate',
        slots: {
            main: [
                { __typename: 'NotificationDetailsBlock', id: 'notification-details-1' },
                { __typename: 'FaqBlock', id: 'faq-1' },
            ],
        },
    },
});
