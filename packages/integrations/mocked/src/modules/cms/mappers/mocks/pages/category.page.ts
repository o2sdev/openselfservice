import { CMS } from '@o2s/framework/modules';

export const PAGE_WARRANTY_AND_REPAIR_EN: CMS.Model.Page.Page = {
    id: 'warranty-and-repair',
    slug: '/help-and-support/warranty-and-repair',
    locale: 'en',
    seo: {
        noIndex: false,
        noFollow: false,
        title: 'Warranty & Repair',
        description: 'Warranty & Repair',
        keywords: [],
        image: {
            url: 'https://picsum.photos/150',
            width: 150,
            height: 150,
            alt: 'Placeholder',
        },
    },
    hasOwnTitle: false,
    parent: {
        slug: '/help-and-support',
        seo: {
            title: 'Help & Support',
        },
    },
    template: {
        __typename: 'OneColumnTemplate',
        slots: {
            main: [
                {
                    __typename: 'CategoryBlock',
                    id: 'category-1',
                },
            ],
        },
    },
    updatedAt: '2025-01-01',
};

export const PAGE_WARRANTY_AND_REPAIR_DE: CMS.Model.Page.Page = {
    id: 'warranty-and-repair',
    slug: '/hilfe-und-support/garantie-und-reparaturt',
    locale: 'de',
    seo: {
        noIndex: false,
        noFollow: false,
        title: 'Garantie & Reparatur',
        description: 'Garantie & Reparatur',
        keywords: [],
        image: {
            url: 'https://picsum.photos/150',
            width: 150,
            height: 150,
            alt: 'Placeholder',
        },
    },
    hasOwnTitle: false,
    parent: {
        slug: '/hilfe-und-support',
        seo: {
            title: 'Hilfe und Support',
        },
    },
    template: {
        __typename: 'OneColumnTemplate',
        slots: {
            main: [
                {
                    __typename: 'CategoryBlock',
                    id: 'category-1',
                },
            ],
        },
    },
    updatedAt: '2025-01-01',
};

export const PAGE_WARRANTY_AND_REPAIR_PL: CMS.Model.Page.Page = {
    id: 'warranty-and-repair',
    slug: '/pomoc-i-wsparcie/gwarancja-i-naprawa',
    locale: 'pl',
    seo: {
        noIndex: false,
        noFollow: false,
        title: 'Gwarancja i Naprawa',
        description: 'Gwarancja i Naprawa',
        keywords: [],
        image: {
            url: 'https://picsum.photos/150',
            width: 150,
            height: 150,
            alt: 'Placeholder',
        },
    },
    hasOwnTitle: false,
    parent: {
        slug: '/pomoc-i-wsparcie',
        seo: {
            title: 'Pomoc i Wsparcie',
        },
    },
    template: {
        __typename: 'OneColumnTemplate',
        slots: {
            main: [
                {
                    __typename: 'CategoryBlock',
                    id: 'category-1',
                },
            ],
        },
    },
    updatedAt: '2025-01-01',
};
