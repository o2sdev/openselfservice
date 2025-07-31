import { Models } from '@o2s/utils.api-harmonization';
import { Utils } from '@o2s/utils.frontend';

import { Sdk } from '@o2s/framework/sdk';

import { Model, Request, URL } from '../api-harmonization/article-search.client';

const API_URL = URL;

export const articleSearch = (sdk: Sdk) => ({
    blocks: {
        getArticleSearch: (
            query: Request.GetArticleSearchBlockQuery,
            headers: Models.Headers.AppHeaders,
            authorization?: string,
        ): Promise<Model.ArticleSearchBlock> =>
            sdk.makeRequest({
                method: 'get',
                url: `${API_URL}`,
                headers: {
                    ...Utils.Headers.getApiHeaders(),
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
            query: Request.SearchArticlesQuery,
            headers: Models.Headers.AppHeaders,
            authorization?: string,
        ): Promise<Model.ArticleList> =>
            sdk.makeRequest({
                method: 'get',
                url: `${API_URL}/articles`,
                headers: {
                    ...Utils.Headers.getApiHeaders(),
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
