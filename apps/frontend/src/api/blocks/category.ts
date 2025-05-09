import { Blocks, Headers } from '@o2s/api-harmonization';

import { Sdk } from '@o2s/framework/sdk';

import { getApiHeaders } from '../../utils/api';

const API_URL = Blocks.Category.URL;

export const category = (sdk: Sdk) => ({
    blocks: {
        getCategory: (
            query: Blocks.Category.Request.GetCategoryBlockQuery,
            headers: Headers.AppHeaders,
            authorization: string,
        ): Promise<Blocks.Category.Model.CategoryBlock> =>
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
        getCategoryArticles: (
            query: Blocks.Category.Request.GetCategoryBlockArticlesQuery,
            headers: Headers.AppHeaders,
            authorization: string,
        ): Promise<Blocks.Category.Model.CategoryArticles> =>
            sdk.makeRequest({
                method: 'get',
                url: `${API_URL}/articles`,
                headers: {
                    ...getApiHeaders(),
                    ...headers,
                    Authorization: `Bearer ${authorization}`,
                },
                params: query,
            }),
    },
});
