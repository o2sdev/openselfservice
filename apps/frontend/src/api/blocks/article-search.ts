import { Blocks, Headers } from '@o2s/api-harmonization';

import { Sdk } from '@o2s/framework/sdk';

import { getApiHeaders } from '../../utils/api';

const API_URL = Blocks.ArticleSearch.URL;

export const articleSearch = (sdk: Sdk) => ({
    blocks: {
        getArticleSearch: (
            query: Blocks.ArticleSearch.Request.GetArticleSearchBlockQuery,
            headers: Headers.AppHeaders,
            authorization?: string,
        ): Promise<Blocks.ArticleSearch.Model.ArticleSearchBlock> =>
            sdk.makeRequest({
                method: 'get',
                url: `${API_URL}`,
                headers: {
                    ...getApiHeaders(),
                    ...headers,
                    ...(authorization
                        ? {
                              Authorization: `Bearer ${authorization}`,
                          }
                        : {}),
                },
                params: query,
            }),

        searchArticles: (
            query: Blocks.ArticleSearch.Request.SearchArticlesQuery,
            headers: Headers.AppHeaders,
            authorization?: string,
        ): Promise<Blocks.ArticleSearch.Model.ArticleList> =>
            sdk.makeRequest({
                method: 'get',
                url: `${API_URL}/articles`,
                headers: {
                    ...getApiHeaders(),
                    ...headers,
                    ...(authorization
                        ? {
                              Authorization: `Bearer ${authorization}`,
                          }
                        : {}),
                },
                params: query,
            }),
    },
});
