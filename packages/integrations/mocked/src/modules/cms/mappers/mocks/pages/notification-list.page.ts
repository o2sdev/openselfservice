import { Auth, CMS } from '@o2s/framework/modules';

export const PAGE_NOTIFICATION_LIST_EN: CMS.Model.Page.Page = {
    id: '4',
    slug: '/notifications',
    locale: 'en',
    seo: {
        noIndex: false,
        noFollow: false,
        title: 'Notifications',
        description: 'Notifications',
        keywords: [],
        image: {
            url: 'https://picsum.photos/150',
            width: 150,
            height: 150,
            alt: 'Placeholder',
        },
    },
    permissions: [Auth.Constants.Roles.USER, Auth.Constants.Roles.ADMIN],
    hasOwnTitle: false,
    template: {
        __typename: 'OneColumnTemplate',
        slots: {
            main: [
                {
                    __typename: 'NotificationListBlock',
                    id: 'notification-list-1',
                },
                {
                    __typename: 'FaqBlock',
                    id: 'faq-1',
                },
            ],
        },
    },
    updatedAt: '2025-01-01',
    createdAt: '2025-01-01',
};

export const PAGE_NOTIFICATION_LIST_DE: CMS.Model.Page.Page = {
    id: '4',
    slug: '/benachrichtigungen',
    locale: 'de',
    seo: {
        noIndex: false,
        noFollow: false,
        title: 'Benachrichtigungen',
        description: 'Benachrichtigungen',
        keywords: [],
        image: {
            url: 'https://picsum.photos/150',
            width: 150,
            height: 150,
            alt: 'Placeholder',
        },
    },
    permissions: [Auth.Constants.Roles.USER, Auth.Constants.Roles.ADMIN],
    hasOwnTitle: false,
    template: {
        __typename: 'OneColumnTemplate',
        slots: {
            main: [
                {
                    __typename: 'NotificationListBlock',
                    id: 'notification-list-1',
                },
                {
                    __typename: 'FaqBlock',
                    id: 'faq-1',
                },
            ],
        },
    },
    updatedAt: '2025-01-01',
    createdAt: '2025-01-01',
};

export const PAGE_NOTIFICATION_LIST_PL: CMS.Model.Page.Page = {
    id: '4',
    slug: '/powiadomienia',
    locale: 'pl',
    seo: {
        noIndex: false,
        noFollow: false,
        title: 'Powiadomienia',
        description: 'Powiadomienia',
        keywords: [],
        image: {
            url: 'https://picsum.photos/150',
            width: 150,
            height: 150,
            alt: 'Placeholder',
        },
    },
    permissions: [Auth.Constants.Roles.USER, Auth.Constants.Roles.ADMIN],
    hasOwnTitle: false,
    template: {
        __typename: 'OneColumnTemplate',
        slots: {
            main: [
                {
                    __typename: 'NotificationListBlock',
                    id: 'notification-list-1',
                },
                {
                    __typename: 'FaqBlock',
                    id: 'faq-1',
                },
            ],
        },
    },
    updatedAt: '2025-01-01',
    createdAt: '2025-01-01',
};
