import { Blocks, Headers } from '@o2s/api-harmonization';

import { Sdk } from '@o2s/framework/sdk';

import { getApiHeaders } from '../../utils/api';

const API_URL = Blocks.ArticleList.URL;

export const articleList = (sdk: Sdk) => ({
    blocks: {
        getArticleList: (
            query: Blocks.ArticleList.Request.GetArticleListBlockQuery,
            headers: Headers.AppHeaders,
            authorization?: string,
        ): Promise<Blocks.ArticleList.Model.ArticleListBlock> =>
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
    },
});
