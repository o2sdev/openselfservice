import { CMS } from '@o2s/framework/modules';

export const PAGE_FINANCES_AND_SAVINGS_PERSONAL_EN: CMS.Model.Page.Page = {
    id: 'finance-and-savings-personal',
    slug: '/personal/help-and-support/finance-and-savings',
    locale: 'en',
    seo: {
        noIndex: false,
        noFollow: false,
        title: 'Finance & Savings',
        description:
            'Learn about managing your finances, savings accounts, investments, and tips for building financial security. Find helpful resources about budgeting, retirement planning, and making smart money decisions.',
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
        slug: '/personal/help-and-support',
        seo: {
            title: 'Help and Support',
        },
    },
    theme: 'personal',
    template: {
        __typename: 'OneColumnTemplate',
        slots: {
            main: [
                {
                    __typename: 'CategoryBlock',
                    id: 'category-1',
                    layout: {
                        variant: 'narrow',
                        spacing: 'none',
                        background: 'none',
                    },
                },
            ],
        },
    },
    updatedAt: '2025-01-01',
    createdAt: '2025-01-01',
};

export const PAGE_FINANCES_AND_SAVINGS_PERSONAL_DE: CMS.Model.Page.Page = {
    id: 'finance-and-savings-personal',
    slug: '/personlich/hilfe-und-support/finanzen-und-sparen',
    locale: 'de',
    seo: {
        noIndex: false,
        noFollow: false,
        title: 'Finanzen & Sparen',
        description:
            'Erfahren Sie mehr über Finanzverwaltung, Sparkonten, Investitionen und Tipps zum Aufbau finanzieller Sicherheit. Finden Sie hilfreiche Ressourcen zu Budgetierung, Altersvorsorge und klugen Finanzentscheidungen.',
        keywords: [],
        image: {
            url: 'https://picsum.photos/150',
            width: 150,
            height: 150,
            alt: 'Platzhalter',
        },
    },
    hasOwnTitle: false,
    parent: {
        slug: '/personlich/hilfe-und-support',
        seo: {
            title: 'Hilfe und Support',
        },
    },
    theme: 'personal',
    template: {
        __typename: 'OneColumnTemplate',
        slots: {
            main: [
                {
                    __typename: 'CategoryBlock',
                    id: 'category-1',
                    layout: {
                        variant: 'narrow',
                        spacing: 'none',
                        background: 'none',
                    },
                },
            ],
        },
    },
    updatedAt: '2025-01-01',
    createdAt: '2025-01-01',
};

export const PAGE_FINANCES_AND_SAVINGS_PERSONAL_PL: CMS.Model.Page.Page = {
    id: 'finance-and-savings-personal',
    slug: '/indywidualny/pomoc-i-wsparcie/finanse-i-oszczednosci',
    locale: 'pl',
    seo: {
        noIndex: false,
        noFollow: false,
        title: 'Finanse i Oszczędności',
        description:
            'Poznaj zagadnienia zarządzania finansami, konta oszczędnościowe, inwestycje i porady dotyczące budowania bezpieczeństwa finansowego. Znajdź przydatne materiały na temat budżetowania, planowania emerytalnego i podejmowania mądrych decyzji finansowych.',
        keywords: [],
        image: {
            url: 'https://picsum.photos/150',
            width: 150,
            height: 150,
            alt: 'Symbol zastępczy',
        },
    },
    hasOwnTitle: false,
    parent: {
        slug: '/indywidualny/pomoc-i-wsparcie',
        seo: {
            title: 'Pomoc i wsparcie',
        },
    },
    theme: 'personal',
    template: {
        __typename: 'OneColumnTemplate',
        slots: {
            main: [
                {
                    __typename: 'CategoryBlock',
                    id: 'category-1',
                    layout: {
                        variant: 'narrow',
                        spacing: 'none',
                        background: 'none',
                    },
                },
            ],
        },
    },
    updatedAt: '2025-01-01',
    createdAt: '2025-01-01',
};

// Warranty & Repair category pages
export const PAGE_FINANCES_AND_SAVINGS_BUSINESS_EN: CMS.Model.Page.Page = {
    id: 'finance-and-savings-business',
    slug: '/business/help-and-support/finance-and-savings',
    locale: 'en',
    seo: {
        noIndex: false,
        noFollow: false,
        title: 'Finance & Savings',
        description:
            'Learn about managing your finances, savings accounts, investments, and tips for building financial security. Find helpful resources about budgeting, retirement planning, and making smart money decisions.',
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
        slug: '/business/help-and-support',
        seo: {
            title: 'Help and Support',
        },
    },
    theme: 'business',
    template: {
        __typename: 'OneColumnTemplate',
        slots: {
            main: [
                {
                    __typename: 'CategoryBlock',
                    id: 'category-2',
                    layout: {
                        variant: 'narrow',
                        spacing: 'none',
                        background: 'none',
                    },
                },
            ],
        },
    },
    updatedAt: '2025-01-01',
    createdAt: '2025-01-01',
};

export const PAGE_FINANCES_AND_SAVINGS_BUSINESS_DE: CMS.Model.Page.Page = {
    id: 'finance-and-savings-business',
    slug: '/geschaftlich/hilfe-und-support/finanzen-und-sparen',
    locale: 'de',
    seo: {
        noIndex: false,
        noFollow: false,
        title: 'Finanzen & Sparen',
        description:
            'Erfahren Sie mehr über Finanzverwaltung, Sparkonten, Investitionen und Tipps zum Aufbau finanzieller Sicherheit. Finden Sie hilfreiche Ressourcen zu Budgetierung, Altersvorsorge und klugen Finanzentscheidungen.',
        keywords: [],
        image: {
            url: 'https://picsum.photos/150',
            width: 150,
            height: 150,
            alt: 'Platzhalter',
        },
    },
    hasOwnTitle: false,
    parent: {
        slug: '/geschaftlich/hilfe-und-support',
        seo: {
            title: 'Hilfe und Support',
        },
    },
    theme: 'business',
    template: {
        __typename: 'OneColumnTemplate',
        slots: {
            main: [
                {
                    __typename: 'CategoryBlock',
                    id: 'category-2',
                    layout: {
                        variant: 'narrow',
                        spacing: 'none',
                        background: 'none',
                    },
                },
            ],
        },
    },
    updatedAt: '2025-01-01',
    createdAt: '2025-01-01',
};

export const PAGE_FINANCES_AND_SAVINGS_BUSINESS_PL: CMS.Model.Page.Page = {
    id: 'finance-and-savings-business',
    slug: '/firma/pomoc-i-wsparcie/finanse-i-oszczednosci',
    locale: 'pl',
    seo: {
        noIndex: false,
        noFollow: false,
        title: 'Finanse i Oszczędności',
        description:
            'Poznaj zagadnienia zarządzania finansami, konta oszczędnościowe, inwestycje i porady dotyczące budowania bezpieczeństwa finansowego. Znajdź przydatne materiały na temat budżetowania, planowania emerytalnego i podejmowania mądrych decyzji finansowych.',
        keywords: [],
        image: {
            url: 'https://picsum.photos/150',
            width: 150,
            height: 150,
            alt: 'Symbol zastępczy',
        },
    },
    hasOwnTitle: false,
    parent: {
        slug: '/firma/pomoc-i-wsparcie',
        seo: {
            title: 'Pomoc i wsparcie',
        },
    },
    theme: 'business',
    template: {
        __typename: 'OneColumnTemplate',
        slots: {
            main: [
                {
                    __typename: 'CategoryBlock',
                    id: 'category-2',
                    layout: {
                        variant: 'narrow',
                        spacing: 'none',
                        background: 'none',
                    },
                },
            ],
        },
    },
    updatedAt: '2025-01-01',
    createdAt: '2025-01-01',
};
