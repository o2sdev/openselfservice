import { Articles, Search } from '@o2s/framework/modules';

import { MOCK_ARTICLES_DE, MOCK_ARTICLES_EN, MOCK_ARTICLES_PL } from '@/modules/articles/mocks/articles.mocks';

export const mapArticles = (payload: Search.Model.SearchPayload): Articles.Model.Articles => {
    const offset = payload.pagination?.offset ?? 0;
    const limit = payload.pagination?.limit ?? 0;

    let articles: Articles.Model.Article[] = [];

    switch (payload.locale) {
        case 'pl':
            articles = MOCK_ARTICLES_PL;
            break;
        case 'de':
            articles = MOCK_ARTICLES_DE;
            break;
        default:
            articles = MOCK_ARTICLES_EN;
            break;
    }

    if (payload.query) {
        articles = articles.filter((article) => article.title.toLowerCase().includes(payload.query!.toLowerCase()));
    }

    return {
        data: articles.slice(offset, offset + limit),
        total: articles.length,
    };
};
