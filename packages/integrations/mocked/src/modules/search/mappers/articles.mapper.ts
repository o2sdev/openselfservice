import { Articles, Search } from '@o2s/framework/modules';

import { MOCK_ARTICLES_DE, MOCK_ARTICLES_EN, MOCK_ARTICLES_PL } from '@/modules/articles/articles.mapper';

export const mapArticles = (payload: Search.Model.SearchPayload): Articles.Model.Articles => {
    const offset = payload.pagination?.offset ?? 0;
    const limit = payload.pagination?.limit ?? 0;
    const locale = payload.locale ?? 'en';
    const articles = locale === 'pl' ? MOCK_ARTICLES_PL : locale === 'de' ? MOCK_ARTICLES_DE : MOCK_ARTICLES_EN;

    return {
        data: articles.slice(offset, offset + limit),
        total: articles.length,
    };
};
