import { Auth, CMS } from '@o2s/framework/modules';

export const PAGE_USER_ACCOUNT_EN: CMS.Model.Page.Page = {
    id: '7',
    slug: '/user-account',
    locale: 'en',
    seo: {
        noIndex: false,
        noFollow: false,
        title: 'User Account',
        description: 'User Account',
        keywords: [],
        image: {
            url: 'https://picsum.photos/150',
            width: 150,
            height: 150,
            alt: 'Placeholder',
        },
    },
    permissions: [Auth.Constants.Roles.PROSPECT, Auth.Constants.Roles.ORG_USER, Auth.Constants.Roles.ORG_ADMIN],
    hasOwnTitle: true,
    template: {
        __typename: 'OneColumnTemplate',
        slots: {
            main: [
                {
                    __typename: 'UserAccountBlock',
                    id: 'user-account-1',
                },
            ],
        },
    },
    updatedAt: '2025-01-01',
    createdAt: '2025-01-01',
};

export const PAGE_USER_ACCOUNT_DE: CMS.Model.Page.Page = {
    id: '7',
    slug: '/benutzerkonto',
    locale: 'de',
    seo: {
        noIndex: false,
        noFollow: false,
        title: 'Benutzerkonto',
        description: 'Benutzerkonto',
        keywords: [],
        image: {
            url: 'https://picsum.photos/150',
            width: 150,
            height: 150,
            alt: 'Placeholder',
        },
    },
    permissions: [Auth.Constants.Roles.PROSPECT, Auth.Constants.Roles.ORG_USER, Auth.Constants.Roles.ORG_ADMIN],
    hasOwnTitle: true,
    template: {
        __typename: 'OneColumnTemplate',
        slots: {
            main: [
                {
                    __typename: 'UserAccountBlock',
                    id: 'user-account-1',
                },
            ],
        },
    },
    updatedAt: '2025-01-01',
    createdAt: '2025-01-01',
};

export const PAGE_USER_ACCOUNT_PL: CMS.Model.Page.Page = {
    id: '7',
    slug: '/konto-uzytkownika',
    locale: 'pl',
    seo: {
        noIndex: false,
        noFollow: false,
        title: 'Konto użytkownika',
        description: 'Konto użytkownika',
        keywords: [],
        image: {
            url: 'https://picsum.photos/150',
            width: 150,
            height: 150,
            alt: 'Placeholder',
        },
    },
    permissions: [Auth.Constants.Roles.PROSPECT, Auth.Constants.Roles.ORG_USER, Auth.Constants.Roles.ORG_ADMIN],
    hasOwnTitle: true,
    template: {
        __typename: 'OneColumnTemplate',
        slots: {
            main: [
                {
                    __typename: 'UserAccountBlock',
                    id: 'user-account-1',
                },
            ],
        },
    },
    updatedAt: '2025-01-01',
    createdAt: '2025-01-01',
};
