import { Articles } from '@o2s/framework/modules';

export const MOCK_CATEGORIES_EN: Articles.Model.Category[] = [
    {
        id: 'finance-and-savings-personal',
        slug: '/personal/help-and-support/finance-and-savings',
        createdAt: '2023-05-12T08:30:00Z',
        updatedAt: '2023-06-15T14:25:00Z',
        title: 'Finance & Savings',
        icon: 'ShieldCheck',
        parent: {
            slug: '/personal/help-and-support',
            title: 'Help and Support',
        },
        description:
            'Learn about managing your finances, savings accounts, investments, and tips for building financial security. Find helpful resources about budgeting, retirement planning, and making smart money decisions.',
    },
    {
        id: 'finance-and-savings-business',
        slug: '/business/help-and-support/finance-and-savings',
        createdAt: '2023-05-12T08:30:00Z',
        updatedAt: '2023-06-15T14:25:00Z',
        title: 'Finance & Savings',
        icon: 'ShieldCheck',
        parent: {
            slug: '/business/help-and-support',
            title: 'Help and Support',
        },
        description:
            'Learn about managing your finances, savings accounts, investments, and tips for building financial security. Find helpful resources about budgeting, retirement planning, and making smart money decisions.',
    },
];

export const MOCK_CATEGORIES_DE: Articles.Model.Category[] = [
    {
        id: 'finance-and-savings-personal',
        slug: '/personlich/hilfe-und-support/finanzen-und-sparen',
        createdAt: '2023-05-12T08:30:00Z',
        updatedAt: '2023-06-15T14:25:00Z',
        title: 'Finanzen & Sparen',
        icon: 'ShieldCheck',
        parent: {
            slug: '/personlich/hilfe-und-support',
            title: 'Hilfe und Support',
        },
        description:
            'Erfahren Sie mehr über Finanzverwaltung, Sparkonten, Investitionen und Tipps zum Aufbau finanzieller Sicherheit. Finden Sie hilfreiche Ressourcen zu Budgetierung, Altersvorsorge und klugen Finanzentscheidungen.',
    },
    {
        id: 'finance-and-savings-business',
        slug: '/geschaftlich/hilfe-und-support/finanzen-und-sparen',
        createdAt: '2023-05-12T08:30:00Z',
        updatedAt: '2023-06-15T14:25:00Z',
        title: 'Finanzen & Sparen',
        icon: 'ShieldCheck',
        parent: {
            slug: '/geschaftlich/hilfe-und-support',
            title: 'Hilfe und Support',
        },
        description:
            'Erfahren Sie mehr über Finanzverwaltung, Sparkonten, Investitionen und Tipps zum Aufbau finanzieller Sicherheit. Finden Sie hilfreiche Ressourcen zu Budgetierung, Altersvorsorge und klugen Finanzentscheidungen.',
    },
];

export const MOCK_CATEGORIES_PL: Articles.Model.Category[] = [
    {
        id: 'finance-and-savings-personal',
        slug: '/indywidualny/pomoc-i-wsparcie/finanse-i-oszczednosci',
        createdAt: '2023-05-12T08:30:00Z',
        updatedAt: '2023-06-15T14:25:00Z',
        title: 'Finanse i Oszczędności',
        icon: 'ShieldCheck',
        parent: {
            slug: '/indywidualny/pomoc-i-wsparcie',
            title: 'Pomoc i wsparcie',
        },
        description:
            'Poznaj zagadnienia zarządzania finansami, konta oszczędnościowe, inwestycje i porady dotyczące budowania bezpieczeństwa finansowego. Znajdź przydatne materiały na temat budżetowania, planowania emerytalnego i podejmowania mądrych decyzji finansowych.',
    },
    {
        id: 'finance-and-savings-business',
        slug: '/firma/pomoc-i-wsparcie/finanse-i-oszczednosci',
        createdAt: '2023-05-12T08:30:00Z',
        updatedAt: '2023-06-15T14:25:00Z',
        title: 'Finanse i Oszczędności',
        icon: 'ShieldCheck',
        parent: {
            slug: '/firma/pomoc-i-wsparcie',
            title: 'Pomoc i wsparcie',
        },
        description:
            'Poznaj zagadnienia zarządzania finansami, konta oszczędnościowe, inwestycje i porady dotyczące budowania bezpieczeństwa finansowego. Znajdź przydatne materiały na temat budżetowania, planowania emerytalnego i podejmowania mądrych decyzji finansowych.',
    },
];
