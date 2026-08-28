import { AppHeaders } from '@o2s/framework/headers';
import { Sdk, createBlockRequest } from '@o2s/framework/sdk';

import { Model, Request } from '../api-harmonization/category.client';
import { URL } from '../api-harmonization/category.url';

const API_URL = URL;

export const category = (sdk: Sdk) => {
    const request = createBlockRequest(sdk);

    return {
        blocks: {
            getCategory: (
                query: Request.GetCategoryBlockQuery,
                headers: AppHeaders,
                authorization?: string,
            ): Promise<Model.CategoryBlock> =>
                request({
                    url: API_URL,
                    params: query,
                    headers,
                    authorization,
                }),
            getCategoryArticles: (
                query: Request.GetCategoryBlockArticlesQuery,
                headers: AppHeaders,
                authorization?: string,
            ): Promise<Model.CategoryArticles> =>
                request({
                    url: `${API_URL}/articles`,
                    params: query,
                    headers,
                    authorization,
                }),
        },
    };
};
