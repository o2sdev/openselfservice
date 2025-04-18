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
