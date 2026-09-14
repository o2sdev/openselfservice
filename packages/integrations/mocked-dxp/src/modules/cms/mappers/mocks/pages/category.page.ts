import { CMS } from '@o2s/framework/modules';

import { businessHelpAndSupportPage } from './business-help-and-support.page';
import { personalHelpAndSupportPage } from './personal-help-and-support.page';

export const financesAndSavingsPersonalPage = CMS.Pages.definePage({
    id: 'finance-and-savings-personal',
    parent: personalHelpAndSupportPage,
    theme: 'personal',
    locales: {
        en: {
            slug: '/personal/help-and-support/finance-and-savings',
            seo: {
                title: 'Finance & Savings',
                description:
                    'Learn about managing your finances, savings accounts, investments, and tips for building financial security. Find helpful resources about budgeting, retirement planning, and making smart money decisions.',
                keywords: [],
                image: { url: 'https://picsum.photos/150', width: 150, height: 150, alt: 'Placeholder' },
            },
        },
        pl: {
            slug: '/indywidualny/pomoc-i-wsparcie/finanse-i-oszczednosci',
            seo: {
                title: 'Finanse i Oszczędności',
                description:
                    'Poznaj zagadnienia zarządzania finansami, konta oszczędnościowe, inwestycje i porady dotyczące budowania bezpieczeństwa finansowego. Znajdź przydatne materiały na temat budżetowania, planowania emerytalnego i podejmowania mądrych decyzji finansowych.',
                keywords: [],
                image: { url: 'https://picsum.photos/150', width: 150, height: 150, alt: 'Symbol zastępczy' },
            },
        },
        de: {
            slug: '/personlich/hilfe-und-support/finanzen-und-sparen',
            seo: {
                title: 'Finanzen & Sparen',
                description:
                    'Erfahren Sie mehr über Finanzverwaltung, Sparkonten, Investitionen und Tipps zum Aufbau finanzieller Sicherheit. Finden Sie hilfreiche Ressourcen zu Budgetierung, Altersvorsorge und klugen Finanzentscheidungen.',
                keywords: [],
                image: { url: 'https://picsum.photos/150', width: 150, height: 150, alt: 'Platzhalter' },
            },
        },
    },
    template: {
        __typename: 'OneColumnTemplate',
        slots: {
            main: [
                {
                    __typename: 'CategoryBlock',
                    id: 'category-1',
                    layout: { variant: 'narrow', spacing: 'none', background: 'none' },
                },
            ],
        },
    },
});

export const financesAndSavingsBusinessPage = CMS.Pages.definePage({
    id: 'finance-and-savings-business',
    parent: businessHelpAndSupportPage,
    theme: 'business',
    locales: {
        en: {
            slug: '/business/help-and-support/finance-and-savings',
            seo: {
                title: 'Finance & Savings',
                description:
                    'Learn about managing your finances, savings accounts, investments, and tips for building financial security. Find helpful resources about budgeting, retirement planning, and making smart money decisions.',
                keywords: [],
                image: { url: 'https://picsum.photos/150', width: 150, height: 150, alt: 'Placeholder' },
            },
        },
        pl: {
            slug: '/firma/pomoc-i-wsparcie/finanse-i-oszczednosci',
            seo: {
                title: 'Finanse i Oszczędności',
                description:
                    'Poznaj zagadnienia zarządzania finansami, konta oszczędnościowe, inwestycje i porady dotyczące budowania bezpieczeństwa finansowego. Znajdź przydatne materiały na temat budżetowania, planowania emerytalnego i podejmowania mądrych decyzji finansowych.',
                keywords: [],
                image: { url: 'https://picsum.photos/150', width: 150, height: 150, alt: 'Symbol zastępczy' },
            },
        },
        de: {
            slug: '/geschaftlich/hilfe-und-support/finanzen-und-sparen',
            seo: {
                title: 'Finanzen & Sparen',
                description:
                    'Erfahren Sie mehr über Finanzverwaltung, Sparkonten, Investitionen und Tipps zum Aufbau finanzieller Sicherheit. Finden Sie hilfreiche Ressourcen zu Budgetierung, Altersvorsorge und klugen Finanzentscheidungen.',
                keywords: [],
                image: { url: 'https://picsum.photos/150', width: 150, height: 150, alt: 'Platzhalter' },
            },
        },
    },
    template: {
        __typename: 'OneColumnTemplate',
        slots: {
            main: [
                {
                    __typename: 'CategoryBlock',
                    id: 'category-2',
                    layout: { variant: 'narrow', spacing: 'none', background: 'none' },
                },
            ],
        },
    },
});
