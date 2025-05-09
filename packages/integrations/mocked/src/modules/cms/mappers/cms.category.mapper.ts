import { CMS } from '@o2s/framework/modules';

const MOCK_CATEGORY_BLOCK_EN: CMS.Model.CategoryBlock.CategoryBlock = {
    id: 'category-1',
    categoryId: 'warranty-and-repair',
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
    description: 'A short description of the heading H2',
    pagination: {
        limit: 6,
        legend: 'of {totalPages} pages',
        prev: 'Previous',
        next: 'Next',
        selectPage: 'Select page',
    },
};
const MOCK_CATEGORY_BLOCK_DE: CMS.Model.CategoryBlock.CategoryBlock = {
    id: 'category-1',
    categoryId: 'warranty-and-repair',
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
    description: 'Eine kurze Beschreibung der Überschrift H2',
    pagination: {
        limit: 6,
        legend: 'von {totalPages} Seiten',
        prev: 'Zurück',
        next: 'Weiter',
        selectPage: 'Seite auswählen',
    },
};

const MOCK_CATEGORY_BLOCK_PL: CMS.Model.CategoryBlock.CategoryBlock = {
    id: 'category-1',
    categoryId: 'warranty-and-repair',
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
    description: 'Krótki opis nagłówka H2',
    pagination: {
        limit: 6,
        legend: 'z {totalPages} stron',
        prev: 'Poprzednia',
        next: 'Następna',
        selectPage: 'Wybierz stronę',
    },
};

export const mapCategoryBlock = (locale: string): CMS.Model.CategoryBlock.CategoryBlock => {
    switch (locale) {
        case 'de':
            return {
                ...MOCK_CATEGORY_BLOCK_DE,
            };
        case 'pl':
            return {
                ...MOCK_CATEGORY_BLOCK_PL,
            };
        case 'en':
        default:
            return {
                ...MOCK_CATEGORY_BLOCK_EN,
            };
    }
};
