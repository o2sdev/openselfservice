import { Utils } from '@o2s/utils.frontend';

import { AppHeaders } from '@o2s/framework/headers';
import { Sdk } from '@o2s/framework/sdk';

import { Model, Request } from '../api-harmonization/category.client';
import { URL } from '../api-harmonization/category.url';

const API_URL = URL;

export const category = (sdk: Sdk) => ({
    blocks: {
        getCategory: (
            query: Request.GetCategoryBlockQuery,
            headers: AppHeaders,
            authorization?: string,
        ): Promise<Model.CategoryBlock> =>
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
        getCategoryArticles: (
            query: Request.GetCategoryBlockArticlesQuery,
            headers: AppHeaders,
            authorization?: string,
        ): Promise<Model.CategoryArticles> =>
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
