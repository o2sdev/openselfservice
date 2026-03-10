import { CMS } from '@o2s/framework/modules';

const MOCK_CATEGORY_LIST_BLOCK_EN: CMS.Model.CategoryListBlock.CategoryListBlock = {
    id: 'category-list-1',
    title: 'Browse by categories',
    description: 'Explore our help topics organized by category to find the information you need quickly and easily.',
    categoryIds: [
        'warranty-and-repair',
        'maintenance',
        'safety',
        'accessories',
        'troubleshooting',
        '33553543097245',
        '31170054759453',
    ],
    parent: {
        slug: '/help-and-support',
    },
};
const MOCK_CATEGORY_LIST_BLOCK_DE: CMS.Model.CategoryListBlock.CategoryListBlock = {
    id: 'category-list-1',
    title: 'Nach Kategorien durchsuchen',
    description:
        'Entdecken Sie unsere Hilfethemen nach Kategorien geordnet, um die benötigten Informationen schnell und einfach zu finden.',
    categoryIds: [
        'warranty-and-repair',
        'maintenance',
        'safety',
        'accessories',
        'troubleshooting',
        '33553543097245',
        '31170054759453',
    ],
    parent: {
        slug: '/hilfe-und-support',
    },
};
const MOCK_CATEGORY_LIST_BLOCK_PL: CMS.Model.CategoryListBlock.CategoryListBlock = {
    id: 'category-list-1',
    title: 'Przeglądaj według kategorii',
    description:
        'Przeglądaj nasze tematy pomocy uporządkowane według kategorii, aby szybko i łatwo znaleźć potrzebne informacje.',
    categoryIds: [
        'warranty-and-repair',
        'maintenance',
        'safety',
        'accessories',
        'troubleshooting',
        '33553543097245',
        '31170054759453',
    ],
    parent: {
        slug: '/pomoc-i-wsparcie',
    },
};

export const mapCategoryListBlock = (locale: string): CMS.Model.CategoryListBlock.CategoryListBlock => {
    switch (locale) {
        case 'de':
            return {
                ...MOCK_CATEGORY_LIST_BLOCK_DE,
            };
        case 'pl':
            return {
                ...MOCK_CATEGORY_LIST_BLOCK_PL,
            };
        case 'en':
        default:
            return {
                ...MOCK_CATEGORY_LIST_BLOCK_EN,
            };
    }
};
