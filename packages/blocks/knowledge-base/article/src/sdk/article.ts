import { AppHeaders } from '@o2s/framework/headers';
import { Sdk, createBlockMethod } from '@o2s/framework/sdk';

import { Model, Request } from '../api-harmonization/article.client';
import { URL } from '../api-harmonization/article.url';

const API_URL = URL;

export const article = (sdk: Sdk) => {
    const request = createBlockMethod(sdk);

    return {
        blocks: {
            getArticle: (
                query: Request.GetArticleBlockQuery,
                headers: AppHeaders,
                authorization?: string,
            ): Promise<Model.ArticleBlock> =>
                request({
                    url: API_URL,
                    params: query,
                    headers,
                    authorization,
                }),
        },
    };
};
