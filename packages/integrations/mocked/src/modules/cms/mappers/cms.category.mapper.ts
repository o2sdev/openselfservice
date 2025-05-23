import { NotFoundException } from '@nestjs/common';

import { CMS } from '@o2s/framework/modules';

// Warranty & Repair category blocks
const MOCK_WARRANTY_REPAIR_BLOCK_EN: CMS.Model.CategoryBlock.CategoryBlock = {
    id: 'category-1',
    categoryId: 'warranty-and-repair',
    componentsPosition: 'bottom',
    components: [
        {
            __typename: 'FaqBlock',
            id: 'faq-1',
        },
    ],
    parent: {
        slug: '/help-and-support',
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
const MOCK_WARRANTY_REPAIR_BLOCK_DE: CMS.Model.CategoryBlock.CategoryBlock = {
    id: 'category-1',
    categoryId: 'warranty-and-repair',
    componentsPosition: 'bottom',
    components: [
        {
            __typename: 'FaqBlock',
            id: 'faq-1',
        },
    ],
    parent: {
        slug: '/hilfe-und-support',
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
const MOCK_WARRANTY_REPAIR_BLOCK_PL: CMS.Model.CategoryBlock.CategoryBlock = {
    id: 'category-1',
    categoryId: 'warranty-and-repair',
    componentsPosition: 'bottom',
    components: [
        {
            __typename: 'FaqBlock',
            id: 'faq-1',
        },
    ],
    parent: {
        slug: '/pomoc-i-wsparcie',
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

// Maintenance category blocks
const MOCK_MAINTENANCE_BLOCK_EN: CMS.Model.CategoryBlock.CategoryBlock = {
    id: 'category-2',
    categoryId: 'maintenance',
    componentsPosition: 'bottom',
    components: [
        {
            __typename: 'FaqBlock',
            id: 'faq-2',
        },
    ],
    parent: {
        slug: '/help-and-support',
    },
    labels: {
        today: 'Today',
        yesterday: 'Yesterday',
    },
    title: 'Maintenance Guides',
    description: 'Learn how to maintain your PowerPro tools',
    pagination: {
        limit: 6,
        legend: 'of {totalPages} pages',
        prev: 'Previous',
        next: 'Next',
        selectPage: 'Select page',
    },
};
const MOCK_MAINTENANCE_BLOCK_DE: CMS.Model.CategoryBlock.CategoryBlock = {
    id: 'category-2',
    categoryId: 'maintenance',
    componentsPosition: 'bottom',
    components: [
        {
            __typename: 'FaqBlock',
            id: 'faq-2',
        },
    ],
    parent: {
        slug: '/hilfe-und-support',
    },
    labels: {
        today: 'Heute',
        yesterday: 'Gestern',
    },
    title: 'Wartungsanleitungen',
    description: 'Erfahren Sie, wie Sie Ihre PowerPro-Werkzeuge warten',
    pagination: {
        limit: 6,
        legend: 'von {totalPages} Seiten',
        prev: 'Zurück',
        next: 'Weiter',
        selectPage: 'Seite auswählen',
    },
};
const MOCK_MAINTENANCE_BLOCK_PL: CMS.Model.CategoryBlock.CategoryBlock = {
    id: 'category-2',
    categoryId: 'maintenance',
    componentsPosition: 'bottom',
    components: [
        {
            __typename: 'FaqBlock',
            id: 'faq-2',
        },
    ],
    parent: {
        slug: '/pomoc-i-wsparcie',
    },
    labels: {
        today: 'Dzisiaj',
        yesterday: 'Wczoraj',
    },
    title: 'Przewodniki konserwacji',
    description: 'Dowiedz się, jak konserwować narzędzia PowerPro',
    pagination: {
        limit: 6,
        legend: 'z {totalPages} stron',
        prev: 'Poprzednia',
        next: 'Następna',
        selectPage: 'Wybierz stronę',
    },
};

// Safety category blocks
const MOCK_SAFETY_BLOCK_EN: CMS.Model.CategoryBlock.CategoryBlock = {
    id: 'category-3',
    categoryId: 'safety',
    componentsPosition: 'bottom',
    components: [
        {
            __typename: 'FaqBlock',
            id: 'faq-3',
        },
    ],
    parent: {
        slug: '/help-and-support',
    },
    labels: {
        today: 'Today',
        yesterday: 'Yesterday',
    },
    title: 'Safety Guidelines',
    description: 'Essential safety practices for using PowerPro tools',
    pagination: {
        limit: 6,
        legend: 'of {totalPages} pages',
        prev: 'Previous',
        next: 'Next',
        selectPage: 'Select page',
    },
};
const MOCK_SAFETY_BLOCK_DE: CMS.Model.CategoryBlock.CategoryBlock = {
    id: 'category-3',
    categoryId: 'safety',
    componentsPosition: 'bottom',
    components: [
        {
            __typename: 'FaqBlock',
            id: 'faq-3',
        },
    ],
    parent: {
        slug: '/hilfe-und-support',
    },
    labels: {
        today: 'Heute',
        yesterday: 'Gestern',
    },
    title: 'Sicherheitsrichtlinien',
    description: 'Wesentliche Sicherheitspraktiken für die Verwendung von PowerPro-Werkzeugen',
    pagination: {
        limit: 6,
        legend: 'von {totalPages} Seiten',
        prev: 'Zurück',
        next: 'Weiter',
        selectPage: 'Seite auswählen',
    },
};
const MOCK_SAFETY_BLOCK_PL: CMS.Model.CategoryBlock.CategoryBlock = {
    id: 'category-3',
    categoryId: 'safety',
    componentsPosition: 'bottom',
    components: [
        {
            __typename: 'FaqBlock',
            id: 'faq-3',
        },
    ],
    parent: {
        slug: '/pomoc-i-wsparcie',
    },
    labels: {
        today: 'Dzisiaj',
        yesterday: 'Wczoraj',
    },
    title: 'Wytyczne bezpieczeństwa',
    description: 'Niezbędne praktyki bezpieczeństwa przy korzystaniu z narzędzi PowerPro',
    pagination: {
        limit: 6,
        legend: 'z {totalPages} stron',
        prev: 'Poprzednia',
        next: 'Następna',
        selectPage: 'Wybierz stronę',
    },
};

// Accessories category blocks
const MOCK_ACCESSORIES_BLOCK_EN: CMS.Model.CategoryBlock.CategoryBlock = {
    id: 'category-4',
    categoryId: 'accessories',
    componentsPosition: 'bottom',
    components: [
        {
            __typename: 'FaqBlock',
            id: 'faq-4',
        },
    ],
    parent: {
        slug: '/help-and-support',
    },
    labels: {
        today: 'Today',
        yesterday: 'Yesterday',
    },
    title: 'Tool Accessories',
    description: 'Explore accessories to enhance your PowerPro tools',
    pagination: {
        limit: 6,
        legend: 'of {totalPages} pages',
        prev: 'Previous',
        next: 'Next',
        selectPage: 'Select page',
    },
};
const MOCK_ACCESSORIES_BLOCK_DE: CMS.Model.CategoryBlock.CategoryBlock = {
    id: 'category-4',
    categoryId: 'accessories',
    componentsPosition: 'bottom',
    components: [
        {
            __typename: 'FaqBlock',
            id: 'faq-4',
        },
    ],
    parent: {
        slug: '/hilfe-und-support',
    },
    labels: {
        today: 'Heute',
        yesterday: 'Gestern',
    },
    title: 'Werkzeugzubehör',
    description: 'Entdecken Sie Zubehör zur Verbesserung Ihrer PowerPro-Werkzeuge',
    pagination: {
        limit: 6,
        legend: 'von {totalPages} Seiten',
        prev: 'Zurück',
        next: 'Weiter',
        selectPage: 'Seite auswählen',
    },
};
const MOCK_ACCESSORIES_BLOCK_PL: CMS.Model.CategoryBlock.CategoryBlock = {
    id: 'category-4',
    categoryId: 'accessories',
    componentsPosition: 'bottom',
    components: [
        {
            __typename: 'FaqBlock',
            id: 'faq-4',
        },
    ],
    parent: {
        slug: '/pomoc-i-wsparcie',
    },
    labels: {
        today: 'Dzisiaj',
        yesterday: 'Wczoraj',
    },
    title: 'Akcesoria do narzędzi',
    description: 'Odkryj akcesoria, które ulepszą Twoje narzędzia PowerPro',
    pagination: {
        limit: 6,
        legend: 'z {totalPages} stron',
        prev: 'Poprzednia',
        next: 'Następna',
        selectPage: 'Wybierz stronę',
    },
};

// Troubleshooting category blocks
const MOCK_TROUBLESHOOTING_BLOCK_EN: CMS.Model.CategoryBlock.CategoryBlock = {
    id: 'category-5',
    categoryId: 'troubleshooting',
    componentsPosition: 'bottom',
    components: [
        {
            __typename: 'FaqBlock',
            id: 'faq-4',
        },
    ],
    parent: {
        slug: '/help-and-support',
    },
    labels: {
        today: 'Today',
        yesterday: 'Yesterday',
    },
    title: 'Troubleshooting',
    description: 'Explore troubleshooting to enhance your PowerPro tools',
    pagination: {
        limit: 6,
        legend: 'of {totalPages} pages',
        prev: 'Previous',
        next: 'Next',
        selectPage: 'Select page',
    },
};
const MOCK_TROUBLESHOOTING_BLOCK_DE: CMS.Model.CategoryBlock.CategoryBlock = {
    id: 'category-5',
    categoryId: 'troubleshooting',
    componentsPosition: 'bottom',
    components: [
        {
            __typename: 'FaqBlock',
            id: 'faq-4',
        },
    ],
    parent: {
        slug: '/hilfe-und-support',
    },
    labels: {
        today: 'Heute',
        yesterday: 'Gestern',
    },
    title: 'Fehlerbehebung',
    description: 'Entdecken Sie Fehlerbehebung für Ihre PowerPro-Werkzeuge',
    pagination: {
        limit: 6,
        legend: 'von {totalPages} Seiten',
        prev: 'Zurück',
        next: 'Weiter',
        selectPage: 'Seite auswählen',
    },
};
const MOCK_TROUBLESHOOTING_BLOCK_PL: CMS.Model.CategoryBlock.CategoryBlock = {
    id: 'category-5',
    categoryId: 'troubleshooting',
    componentsPosition: 'bottom',
    components: [
        {
            __typename: 'FaqBlock',
            id: 'faq-4',
        },
    ],
    parent: {
        slug: '/pomoc-i-wsparcie',
    },
    labels: {
        today: 'Dzisiaj',
        yesterday: 'Wczoraj',
    },
    title: 'Rozwiązywanie problemów',
    description: 'Rozwiązywanie problemów z Twoimi narzędziami PowerPro',
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
                return MOCK_WARRANTY_REPAIR_BLOCK_DE;
            } else if (locale === 'pl') {
                return MOCK_WARRANTY_REPAIR_BLOCK_PL;
            } else {
                return MOCK_WARRANTY_REPAIR_BLOCK_EN;
            }
        case 'category-2':
            if (locale === 'de') {
                return MOCK_MAINTENANCE_BLOCK_DE;
            } else if (locale === 'pl') {
                return MOCK_MAINTENANCE_BLOCK_PL;
            } else {
                return MOCK_MAINTENANCE_BLOCK_EN;
            }
        case 'category-3':
            if (locale === 'de') {
                return MOCK_SAFETY_BLOCK_DE;
            } else if (locale === 'pl') {
                return MOCK_SAFETY_BLOCK_PL;
            } else {
                return MOCK_SAFETY_BLOCK_EN;
            }
        case 'category-4':
            if (locale === 'de') {
                return MOCK_ACCESSORIES_BLOCK_DE;
            } else if (locale === 'pl') {
                return MOCK_ACCESSORIES_BLOCK_PL;
            } else {
                return MOCK_ACCESSORIES_BLOCK_EN;
            }
        case 'category-5':
            if (locale === 'de') {
                return MOCK_TROUBLESHOOTING_BLOCK_DE;
            } else if (locale === 'pl') {
                return MOCK_TROUBLESHOOTING_BLOCK_PL;
            } else {
                return MOCK_TROUBLESHOOTING_BLOCK_EN;
            }
        default:
            throw new NotFoundException();
    }
};
