import { NotFoundException } from '@nestjs/common';

import { CMS } from '@o2s/framework/modules';

// Warranty & Repair category blocks
const MOCK_FINANCE_AND_SAVINGS_PERSONAL_BLOCK_EN: CMS.Model.CategoryBlock.CategoryBlock = {
    id: 'category-1',
    categoryId: 'finance-and-savings-personal',
    componentsPosition: 'bottom',
    components: [
        {
            __typename: 'FaqBlock',
            id: 'faq-1',
            layout: {
                variant: 'narrow',
                spacing: 'medium',
                background: 'none',
            },
        },
    ],
    parent: {
        slug: '/personal/help-and-support',
    },
    labels: {
        today: 'Today',
        yesterday: 'Yesterday',
    },
    title: 'How-to Articles',
    description:
        'Find information about product warranties, repair services, and how to get support for your PowerPro tools.',
    pagination: {
        limit: 6,
        legend: 'of {totalPages} pages',
        prev: 'Previous',
        next: 'Next',
        selectPage: 'Select page',
    },
};
const MOCK_FINANCE_AND_SAVINGS_PERSONAL_BLOCK_DE: CMS.Model.CategoryBlock.CategoryBlock = {
    id: 'category-1',
    categoryId: 'finance-and-savings-personal',
    componentsPosition: 'bottom',
    components: [
        {
            __typename: 'FaqBlock',
            id: 'faq-1',
            layout: {
                variant: 'narrow',
                spacing: 'medium',
                background: 'none',
            },
        },
    ],
    parent: {
        slug: '/personlich/hilfe-und-support',
    },
    labels: {
        today: 'Heute',
        yesterday: 'Gestern',
    },
    title: 'Anleitungsartikel',
    description:
        'Finden Sie Informationen zu Produktgarantien, Reparaturservices und wie Sie Unterstützung für Ihre PowerPro-Werkzeuge erhalten können.',
    pagination: {
        limit: 6,
        legend: 'von {totalPages} Seiten',
        prev: 'Zurück',
        next: 'Weiter',
        selectPage: 'Seite auswählen',
    },
};
const MOCK_FINANCE_AND_SAVINGS_PERSONAL_BLOCK_PL: CMS.Model.CategoryBlock.CategoryBlock = {
    id: 'category-1',
    categoryId: 'finance-and-savings-personal',
    componentsPosition: 'bottom',
    components: [
        {
            __typename: 'FaqBlock',
            id: 'faq-1',
            layout: {
                variant: 'narrow',
                spacing: 'medium',
                background: 'none',
            },
        },
    ],
    parent: {
        slug: '/indywidualny/pomoc-i-wsparcie',
    },
    labels: {
        today: 'Dzisiaj',
        yesterday: 'Wczoraj',
    },
    title: 'Artykuły instruktażowe',
    description:
        'Znajdź informacje o gwarancjach produktów, usługach naprawczych i jak uzyskać wsparcie dla swoich narzędzi PowerPro.',
    pagination: {
        limit: 6,
        legend: 'z {totalPages} stron',
        prev: 'Poprzednia',
        next: 'Następna',
        selectPage: 'Wybierz stronę',
    },
};
const MOCK_FINANCE_AND_SAVINGS_BUSINESS_BLOCK_EN: CMS.Model.CategoryBlock.CategoryBlock = {
    id: 'category-2',
    categoryId: 'finance-and-savings-business',
    componentsPosition: 'bottom',
    components: [
        {
            __typename: 'FaqBlock',
            id: 'faq-1',
            layout: {
                variant: 'narrow',
                spacing: 'medium',
                background: 'none',
            },
        },
    ],
    parent: {
        slug: '/business/help-and-support',
    },
    labels: {
        today: 'Today',
        yesterday: 'Yesterday',
    },
    title: 'How-to Articles',
    description:
        'Find information about product warranties, repair services, and how to get support for your PowerPro tools.',
    pagination: {
        limit: 6,
        legend: 'of {totalPages} pages',
        prev: 'Previous',
        next: 'Next',
        selectPage: 'Select page',
    },
};

const MOCK_FINANCE_AND_SAVINGS_BUSINESS_BLOCK_DE: CMS.Model.CategoryBlock.CategoryBlock = {
    id: 'category-2',
    categoryId: 'finance-and-savings-business',
    componentsPosition: 'bottom',
    components: [
        {
            __typename: 'FaqBlock',
            id: 'faq-1',
            layout: {
                variant: 'narrow',
                spacing: 'medium',
                background: 'none',
            },
        },
    ],
    parent: {
        slug: '/geschaftlich/hilfe-und-support',
    },
    labels: {
        today: 'Heute',
        yesterday: 'Gestern',
    },
    title: 'Anleitungsartikel',
    description:
        'Finden Sie Informationen zu Produktgarantien, Reparaturservices und wie Sie Unterstützung für Ihre PowerPro-Werkzeuge erhalten können.',
    pagination: {
        limit: 6,
        legend: 'von {totalPages} Seiten',
        prev: 'Zurück',
        next: 'Weiter',
        selectPage: 'Seite auswählen',
    },
};
const MOCK_FINANCE_AND_SAVINGS_BUSINESS_BLOCK_PL: CMS.Model.CategoryBlock.CategoryBlock = {
    id: 'category-2',
    categoryId: 'finance-and-savings-business',
    componentsPosition: 'bottom',
    components: [
        {
            __typename: 'FaqBlock',
            id: 'faq-1',
            layout: {
                variant: 'narrow',
                spacing: 'medium',
                background: 'none',
            },
        },
    ],
    parent: {
        slug: '/firma/pomoc-i-wsparcie',
    },
    labels: {
        today: 'Dzisiaj',
        yesterday: 'Wczoraj',
    },
    title: 'Artykuły instruktażowe',
    description:
        'Znajdź informacje o gwarancjach produktów, usługach naprawczych i jak uzyskać wsparcie dla swoich narzędzi PowerPro.',
    pagination: {
        limit: 6,
        legend: 'z {totalPages} stron',
        prev: 'Poprzednia',
        next: 'Następna',
        selectPage: 'Wybierz stronę',
    },
};

export const mapCategoryBlock = (id: string, locale: string): CMS.Model.CategoryBlock.CategoryBlock => {
    switch (id) {
        case 'category-1':
            if (locale === 'de') {
                return MOCK_FINANCE_AND_SAVINGS_PERSONAL_BLOCK_DE;
            } else if (locale === 'pl') {
                return MOCK_FINANCE_AND_SAVINGS_PERSONAL_BLOCK_PL;
            } else {
                return MOCK_FINANCE_AND_SAVINGS_PERSONAL_BLOCK_EN;
            }
        case 'category-2':
            if (locale === 'de') {
                return MOCK_FINANCE_AND_SAVINGS_BUSINESS_BLOCK_DE;
            } else if (locale === 'pl') {
                return MOCK_FINANCE_AND_SAVINGS_BUSINESS_BLOCK_PL;
            } else {
                return MOCK_FINANCE_AND_SAVINGS_BUSINESS_BLOCK_EN;
            }
        default:
            throw new NotFoundException();
    }
};
