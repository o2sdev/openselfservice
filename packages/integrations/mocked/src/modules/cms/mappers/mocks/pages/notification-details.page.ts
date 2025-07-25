import { Auth, CMS } from '@o2s/framework/modules';

export const PAGE_NOTIFICATION_DETAILS_EN: CMS.Model.Page.Page = {
    id: '6',
    slug: '/notifications/(.+)',
    locale: 'en',
    seo: {
        noIndex: false,
        noFollow: false,
        title: 'Notification Details',
        description: 'Notification Details',
        keywords: [],
        image: {
            url: 'https://picsum.photos/150',
            width: 150,
            height: 150,
            alt: 'Placeholder',
        },
    },
    permissions: [Auth.Constants.Roles.ORG_USER, Auth.Constants.Roles.ORG_ADMIN],
    hasOwnTitle: true,
    parent: {
        slug: '/notifications',
        seo: {
            title: 'Notifications',
        },
    },
    template: {
        __typename: 'OneColumnTemplate',
        slots: {
            main: [
                {
                    __typename: 'NotificationDetailsBlock',
                    id: 'notification-details-1',
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

export const PAGE_NOTIFICATION_DETAILS_DE: CMS.Model.Page.Page = {
    id: '6',
    slug: '/benachrichtigungen/(.+)',
    locale: 'de',
    seo: {
        noIndex: false,
        noFollow: false,
        title: 'Benachrichtigung Details',
        description: 'Benachrichtigung Details',
        keywords: [],
        image: {
            url: 'https://picsum.photos/150',
            width: 150,
            height: 150,
            alt: 'Placeholder',
        },
    },
    permissions: [Auth.Constants.Roles.ORG_USER, Auth.Constants.Roles.ORG_ADMIN],
    hasOwnTitle: true,
    parent: {
        slug: '/benachrichtigungen',
        seo: {
            title: 'Benachrichtigungen',
        },
    },
    template: {
        __typename: 'OneColumnTemplate',
        slots: {
            main: [
                {
                    __typename: 'NotificationDetailsBlock',
                    id: 'notification-details-1',
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

export const PAGE_NOTIFICATION_DETAILS_PL: CMS.Model.Page.Page = {
    id: '6',
    slug: '/powiadomienia/(.+)',
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
    permissions: [Auth.Constants.Roles.ORG_USER, Auth.Constants.Roles.ORG_ADMIN],
    hasOwnTitle: true,
    parent: {
        slug: '/powiadomienia',
        seo: {
            title: 'Powiadomienia',
        },
    },
    template: {
        __typename: 'OneColumnTemplate',
        slots: {
            main: [
                {
                    __typename: 'NotificationDetailsBlock',
                    id: 'notification-details-1',
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
