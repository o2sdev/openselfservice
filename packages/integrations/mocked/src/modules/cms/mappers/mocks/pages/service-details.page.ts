import { CMS } from '@o2s/framework/modules';

export const PAGE_SERVICE_DETAILS_EN: CMS.Model.Page.Page = {
    id: '3',
    slug: '/services/(.+)',
    locale: 'en',
    seo: {
        noIndex: false,
        noFollow: false,
        title: 'Service Details',
        description: 'Service Details',
        keywords: [],
        image: {
            url: 'https://picsum.photos/150',
            width: 150,
            height: 150,
            alt: 'Placeholder',
        },
    },
    isProtected: true,
    hasOwnTitle: true,
    parent: {
        slug: '/services',
        seo: {
            title: 'Services',
        },
        parent: {
            slug: '/',
            seo: {
                title: 'Dashboard',
            },
        },
    },
    template: {
        __typename: 'OneColumnTemplate',
        slots: {
            main: [
                {
                    __typename: 'ServiceDetailsBlock',
                    id: 'service-details-1',
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

export const PAGE_SERVICE_DETAILS_DE: CMS.Model.Page.Page = {
    id: '3',
    slug: '/dienstleistungen/(.+)',
    locale: 'de',
    seo: {
        noIndex: false,
        noFollow: false,
        title: 'Dienstleistungen',
        description: 'Dienstleistungen',
        keywords: [],
        image: {
            url: 'https://picsum.photos/150',
            width: 150,
            height: 150,
            alt: 'Placeholder',
        },
    },
    isProtected: true,
    hasOwnTitle: true,
    parent: {
        slug: '/dienstleistungen',
        seo: {
            title: 'Dienstleistungen',
        },
        parent: {
            slug: '/',
            seo: {
                title: 'Startseite',
            },
        },
    },
    template: {
        __typename: 'OneColumnTemplate',
        slots: {
            main: [
                {
                    __typename: 'ServiceDetailsBlock',
                    id: 'service-details-1',
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

export const PAGE_SERVICE_DETAILS_PL: CMS.Model.Page.Page = {
    id: '3',
    slug: '/uslugi/(.+)',
    locale: 'pl',
    seo: {
        noIndex: false,
        noFollow: false,
        title: 'Usługi',
        description: 'Usługi',
        keywords: [],
        image: {
            url: 'https://picsum.photos/150',
            width: 150,
            height: 150,
            alt: 'Placeholder',
        },
    },
    isProtected: true,
    hasOwnTitle: true,
    parent: {
        slug: '/uslugi',
        seo: {
            title: 'Usługi',
        },
        parent: {
            slug: '/',
            seo: {
                title: 'Strona główna',
            },
        },
    },
    template: {
        __typename: 'OneColumnTemplate',
        slots: {
            main: [
                {
                    __typename: 'ServiceDetailsBlock',
                    id: 'service-details-1',
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
