import { AppHeaders } from '@o2s/framework/headers';
import { Sdk, createBlockRequest } from '@o2s/framework/sdk';

import { Model, Request } from '../api-harmonization/article-search.client';
import { URL } from '../api-harmonization/article-search.url';

const API_URL = URL;

export const articleSearch = (sdk: Sdk) => {
    const request = createBlockRequest(sdk);

    return {
        blocks: {
            getArticleSearch: (
                query: Request.GetArticleSearchBlockQuery,
                headers: AppHeaders,
                authorization?: string,
            ): Promise<Model.ArticleSearchBlock> =>
                request({
                    url: API_URL,
                    params: query,
                    headers,
                    authorization,
                }),
            searchArticles: (
                query: Request.SearchArticlesQuery,
                headers: AppHeaders,
                authorization?: string,
            ): Promise<Model.ArticleList> =>
                request({
                    url: `${API_URL}/articles`,
                    params: query,
                    headers,
                    authorization,
                }),
        },
    };
};
