import { Utils } from '@o2s/utils.frontend';

import { AppHeaders } from '@o2s/framework/headers';
import { Sdk } from '@o2s/framework/sdk';

import { Model, Request } from '../api-harmonization/article-list.client';
import { URL } from '../api-harmonization/article-list.url';

const API_URL = URL;

export const articleList = (sdk: Sdk) => ({
    blocks: {
        getArticleList: (
            query: Request.GetArticleListBlockQuery,
            headers: AppHeaders,
            authorization?: string,
        ): Promise<Model.ArticleListBlock> =>
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
    },
});
