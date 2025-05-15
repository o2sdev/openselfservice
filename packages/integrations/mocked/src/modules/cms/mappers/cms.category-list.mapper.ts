import { CMS } from '@o2s/framework/modules';

const MOCK_ARTICLE_LIST_BLOCK_EN: CMS.Model.CategoryListBlock.CategoryListBlock = {
    id: 'category-list-1',
    title: 'Browse by categories',
    description: 'A short description of the heading H2',
    categoryIds: ['warranty-and-repair', 'maintenance', 'safety', 'accessories'],
    parent: {
        slug: '/help-and-support',
    },
};
const MOCK_ARTICLE_LIST_BLOCK_DE: CMS.Model.CategoryListBlock.CategoryListBlock = {
    id: 'category-list-1',
    title: 'Nach Kategorien durchsuchen',
    description: 'Eine kurze Beschreibung der Überschrift H2',
    categoryIds: ['warranty-and-repair', 'maintenance', 'safety', 'accessories'],
    parent: {
        slug: '/hilfe-und-support',
    },
};
const MOCK_ARTICLE_LIST_BLOCK_PL: CMS.Model.CategoryListBlock.CategoryListBlock = {
    id: 'category-list-1',
    title: 'Przeglądaj według kategorii',
    description: 'Krótki opis nagłówka H2',
    categoryIds: ['warranty-and-repair', 'maintenance', 'safety', 'accessories'],
    parent: {
        slug: '/pomoc-i-wsparcie',
    },
};

export const mapCategoryListBlock = (locale: string): CMS.Model.CategoryListBlock.CategoryListBlock => {
    switch (locale) {
        case 'de':
            return {
                ...MOCK_ARTICLE_LIST_BLOCK_DE,
            };
        case 'pl':
            return {
                ...MOCK_ARTICLE_LIST_BLOCK_PL,
            };
        case 'en':
        default:
            return {
                ...MOCK_ARTICLE_LIST_BLOCK_EN,
            };
    }
};
