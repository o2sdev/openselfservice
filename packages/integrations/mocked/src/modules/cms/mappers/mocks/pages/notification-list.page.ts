import { CMS } from '@o2s/framework/modules';

import { Roles } from '@/utils/roles';

export const notificationListPage = CMS.Pages.definePage({
    id: '4',
    roles: [Roles.PROSPECT, Roles.ORG_USER, Roles.ORG_ADMIN],
    locales: {
        en: { slug: '/notifications', seo: { title: 'Notifications', description: 'Notifications' } },
        pl: { slug: '/powiadomienia', seo: { title: 'Powiadomienia', description: 'Powiadomienia' } },
        de: { slug: '/benachrichtigungen', seo: { title: 'Benachrichtigungen', description: 'Benachrichtigungen' } },
    },
    template: {
        __typename: 'OneColumnTemplate',
        slots: {
            main: [
                { __typename: 'NotificationSummaryBlock', id: 'notification-summary-1' },
                { __typename: 'NotificationListBlock', id: 'notification-list-1' },
                { __typename: 'FaqBlock', id: 'faq-1' },
            ],
        },
    },
});
