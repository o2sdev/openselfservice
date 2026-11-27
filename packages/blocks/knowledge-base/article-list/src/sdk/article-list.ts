import { AppHeaders } from '@o2s/framework/headers';
import { Sdk, createBlockRequest } from '@o2s/framework/sdk';

import { Model, Request } from '../api-harmonization/article-list.client';
import { URL } from '../api-harmonization/article-list.url';

const API_URL = URL;

export const articleList = (sdk: Sdk) => {
    const request = createBlockRequest(sdk);

    return {
        blocks: {
            getArticleList: (
                query: Request.GetArticleListBlockQuery,
                headers: AppHeaders,
                authorization?: string,
            ): Promise<Model.ArticleListBlock> =>
                request({
                    url: API_URL,
                    params: query,
                    headers,
                    authorization,
                }),
        },
    };
};
