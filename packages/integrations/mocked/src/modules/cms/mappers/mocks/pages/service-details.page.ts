import { Auth, CMS } from '@o2s/framework/modules';

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
    permissions: [Auth.Constants.Roles.ORG_USER, Auth.Constants.Roles.ORG_ADMIN],
    hasOwnTitle: true,
    parent: {
        slug: '/services',
        seo: {
            title: 'Services',
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
                    __typename: 'FeaturedServiceListBlock',
                    id: 'featured-service-list-1',
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
    permissions: [Auth.Constants.Roles.ORG_USER, Auth.Constants.Roles.ORG_ADMIN],
    hasOwnTitle: true,
    parent: {
        slug: '/dienstleistungen',
        seo: {
            title: 'Dienstleistungen',
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
                    __typename: 'FeaturedServiceListBlock',
                    id: 'featured-service-list-1',
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
    permissions: [Auth.Constants.Roles.ORG_USER, Auth.Constants.Roles.ORG_ADMIN],
    hasOwnTitle: true,
    parent: {
        slug: '/uslugi',
        seo: {
            title: 'Usługi',
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
                    __typename: 'FeaturedServiceListBlock',
                    id: 'featured-service-list-1',
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
