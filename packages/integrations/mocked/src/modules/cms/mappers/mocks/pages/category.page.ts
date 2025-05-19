import { CMS } from '@o2s/framework/modules';

// Warranty & Repair category pages
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
    isProtected: false,
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
    createdAt: '2025-01-01',
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
    isProtected: false,
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
    createdAt: '2025-01-01',
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
    isProtected: false,
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
    createdAt: '2025-01-01',
};

// Maintenance category pages
export const PAGE_MAINTENANCE_EN: CMS.Model.Page.Page = {
    id: 'maintenance',
    slug: '/help-and-support/maintenance',
    locale: 'en',
    seo: {
        noIndex: false,
        noFollow: false,
        title: 'Maintenance',
        description: 'Maintenance',
        keywords: [],
        image: {
            url: 'https://picsum.photos/150',
            width: 150,
            height: 150,
            alt: 'Placeholder',
        },
    },

    isProtected: false,
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
                    id: 'category-2',
                },
            ],
        },
    },
    updatedAt: '2025-01-01',
    createdAt: '2025-01-01',
};

export const PAGE_MAINTENANCE_DE: CMS.Model.Page.Page = {
    id: 'maintenance',
    slug: '/hilfe-und-support/wartung',
    locale: 'de',
    seo: {
        noIndex: false,
        noFollow: false,
        title: 'Wartung',
        description: 'Wartung',
        keywords: [],
        image: {
            url: 'https://picsum.photos/150',
            width: 150,
            height: 150,
            alt: 'Placeholder',
        },
    },

    isProtected: false,
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
                    id: 'category-2',
                },
            ],
        },
    },
    updatedAt: '2025-01-01',
    createdAt: '2025-01-01',
};

export const PAGE_MAINTENANCE_PL: CMS.Model.Page.Page = {
    id: 'maintenance',
    slug: '/pomoc-i-wsparcie/konserwacja',
    locale: 'pl',
    seo: {
        noIndex: false,
        noFollow: false,
        title: 'Konserwacja',
        description: 'Konserwacja',
        keywords: [],
        image: {
            url: 'https://picsum.photos/150',
            width: 150,
            height: 150,
            alt: 'Placeholder',
        },
    },

    isProtected: false,
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
                    id: 'category-2',
                },
            ],
        },
    },
    updatedAt: '2025-01-01',
    createdAt: '2025-01-01',
};

// Safety category pages
export const PAGE_SAFETY_EN: CMS.Model.Page.Page = {
    id: 'safety',
    slug: '/help-and-support/safety',
    locale: 'en',
    seo: {
        noIndex: false,
        noFollow: false,
        title: 'Safety',
        description: 'Safety',
        keywords: [],
        image: {
            url: 'https://picsum.photos/150',
            width: 150,
            height: 150,
            alt: 'Placeholder',
        },
    },

    isProtected: false,
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
                    id: 'category-3',
                },
            ],
        },
    },
    updatedAt: '2025-01-01',
    createdAt: '2025-01-01',
};

export const PAGE_SAFETY_DE: CMS.Model.Page.Page = {
    id: 'safety',
    slug: '/hilfe-und-support/sicherheit',
    locale: 'de',
    seo: {
        noIndex: false,
        noFollow: false,
        title: 'Sicherheit',
        description: 'Sicherheit',
        keywords: [],
        image: {
            url: 'https://picsum.photos/150',
            width: 150,
            height: 150,
            alt: 'Placeholder',
        },
    },

    isProtected: false,
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
                    id: 'category-3',
                },
            ],
        },
    },
    updatedAt: '2025-01-01',
    createdAt: '2025-01-01',
};

export const PAGE_SAFETY_PL: CMS.Model.Page.Page = {
    id: 'safety',
    slug: '/pomoc-i-wsparcie/bezpieczenstwo',
    locale: 'pl',
    seo: {
        noIndex: false,
        noFollow: false,
        title: 'Bezpieczeństwo',
        description: 'Bezpieczeństwo',
        keywords: [],
        image: {
            url: 'https://picsum.photos/150',
            width: 150,
            height: 150,
            alt: 'Placeholder',
        },
    },

    isProtected: false,
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
                    id: 'category-3',
                },
            ],
        },
    },
    updatedAt: '2025-01-01',
    createdAt: '2025-01-01',
};

// Accessories category pages
export const PAGE_ACCESSORIES_EN: CMS.Model.Page.Page = {
    id: 'accessories',
    slug: '/help-and-support/accessories',
    locale: 'en',
    seo: {
        noIndex: false,
        noFollow: false,
        title: 'Accessories',
        description: 'Accessories',
        keywords: [],
        image: {
            url: 'https://picsum.photos/150',
            width: 150,
            height: 150,
            alt: 'Placeholder',
        },
    },

    isProtected: false,
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
                    id: 'category-4',
                },
            ],
        },
    },
    updatedAt: '2025-01-01',
    createdAt: '2025-01-01',
};

export const PAGE_ACCESSORIES_DE: CMS.Model.Page.Page = {
    id: 'accessories',
    slug: '/hilfe-und-support/zubehoer',
    locale: 'de',
    seo: {
        noIndex: false,
        noFollow: false,
        title: 'Zubehör',
        description: 'Zubehör',
        keywords: [],
        image: {
            url: 'https://picsum.photos/150',
            width: 150,
            height: 150,
            alt: 'Placeholder',
        },
    },

    isProtected: false,
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
                    id: 'category-4',
                },
            ],
        },
    },
    updatedAt: '2025-01-01',
    createdAt: '2025-01-01',
};

export const PAGE_ACCESSORIES_PL: CMS.Model.Page.Page = {
    id: 'accessories',
    slug: '/pomoc-i-wsparcie/akcesoria',
    locale: 'pl',
    seo: {
        noIndex: false,
        noFollow: false,
        title: 'Akcesoria',
        description: 'Akcesoria',
        keywords: [],
        image: {
            url: 'https://picsum.photos/150',
            width: 150,
            height: 150,
            alt: 'Placeholder',
        },
    },

    isProtected: false,
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
                    id: 'category-4',
                },
            ],
        },
    },
    updatedAt: '2025-01-01',
    createdAt: '2025-01-01',
};
