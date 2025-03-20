import { CMS } from '@o2s/framework/modules';

export const mapCategoryListBlock = (locale: string): CMS.Model.CategoryListBlock.CategoryListBlock => {
    const getDetailsUrl = () => {
        switch (locale) {
            case 'en':
                return `/articles/{id}`;
            case 'de':
                return `/artikel/{id}`;
            case 'pl':
                return `/artykuły/{id}`;
        }

        return '';
    };

    switch (locale) {
        case 'de':
            return {
                ...MOCK_ARTICLE_LIST_BLOCK_DE,
                detailsUrl: getDetailsUrl(),
            };
        case 'pl':
            return {
                ...MOCK_ARTICLE_LIST_BLOCK_PL,
                detailsUrl: getDetailsUrl(),
            };
        case 'en':
        default:
            return {
                ...MOCK_ARTICLE_LIST_BLOCK_EN,
                detailsUrl: getDetailsUrl(),
            };
    }
};
