import { AppHeaders } from '@o2s/framework/headers';
import { Sdk, createBlockRequest } from '@o2s/framework/sdk';

import { Model, Request } from '../api-harmonization/category-list.client';
import { URL } from '../api-harmonization/category-list.url';

const API_URL = URL;

export const categoryList = (sdk: Sdk) => {
    const request = createBlockRequest(sdk);

    return {
        blocks: {
            getCategoryList: (
                query: Request.GetCategoryListBlockQuery,
                headers: AppHeaders,
                authorization?: string,
            ): Promise<Model.CategoryListBlock> =>
                request({
                    url: API_URL,
                    params: query,
                    headers,
                    authorization,
                }),
        },
    };
};
