import { Search } from '@o2s/framework/modules';

import { MOCK_ARTICLES_DE, MOCK_ARTICLES_EN, MOCK_ARTICLES_PL } from '../articles/articles.mapper';
import { SearchEngineArticleModel } from '../articles/articles.search.model';

const SEARCH_ARTICLES_MOCKS_EN: SearchEngineArticleModel[] = MOCK_ARTICLES_EN.map((article) => ({
    ...article,
    objectID: article.id + '-en',
}));

const SEARCH_ARTICLES_MOCKS_PL: SearchEngineArticleModel[] = MOCK_ARTICLES_PL.map((article) => ({
    ...article,
    objectID: article.id + '-pl',
}));

const SEARCH_ARTICLES_MOCKS_DE: SearchEngineArticleModel[] = MOCK_ARTICLES_DE.map((article) => ({
    ...article,
    objectID: article.id + '-de',
}));

export const getArticles = (
    payload: Search.Model.SearchPayload,
): Search.Model.SearchResult<SearchEngineArticleModel> => {
    if (payload.locale === 'pl') {
        return {
            hits: SEARCH_ARTICLES_MOCKS_PL,
            total: SEARCH_ARTICLES_MOCKS_PL.length,
        };
    } else if (payload.locale === 'de') {
        return {
            hits: SEARCH_ARTICLES_MOCKS_DE,
            total: SEARCH_ARTICLES_MOCKS_DE.length,
        };
    } else {
        return {
            hits: SEARCH_ARTICLES_MOCKS_EN,
            total: SEARCH_ARTICLES_MOCKS_EN.length,
        };
    }
};
