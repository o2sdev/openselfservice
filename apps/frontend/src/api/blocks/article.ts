import { Blocks, Headers } from '@o2s/api-harmonization';

import { Sdk } from '@o2s/framework/sdk';

import { getApiHeaders } from '../../utils/api';

const API_URL = Blocks.Article.URL;

export const article = (sdk: Sdk) => ({
    blocks: {
        getArticle: (
            query: Blocks.Article.Request.GetArticleBlockQuery,
            headers: Headers.AppHeaders,
            authorization: string,
        ): Promise<Blocks.Article.Model.ArticleBlock> =>
            sdk.makeRequest({
                method: 'get',
                url: `${API_URL}`,
                headers: {
                    ...getApiHeaders(),
                    ...headers,
                    Authorization: `Bearer ${authorization}`,
                },
                params: query,
            }),
    },
});
