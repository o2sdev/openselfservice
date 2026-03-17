import { Models } from '@o2s/utils.api-harmonization';
import { Utils } from '@o2s/utils.frontend';

import { Sdk } from '@o2s/framework/sdk';

import { Model, Request, URL } from '../api-harmonization/recommended-products.client';

export const recommendedProducts = (sdk: Sdk) => ({
    blocks: {
        getRecommendedProducts: (
            params: { id: string },
            query?: Omit<Request.GetRecommendedProductsBlockQuery, 'id'>,
            headers?: Models.Headers.AppHeaders,
            authorization?: string,
        ): Promise<Model.RecommendedProductsBlock> =>
            sdk.makeRequest({
                method: 'get',
                url: `${URL}`,
                headers: {
                    ...Utils.Headers.getApiHeaders(),
                    ...headers,
                    ...(authorization
                        ? {
                              Authorization: `Bearer ${authorization}`,
                          }
                        : {}),
                },
                params: {
                    ...params,
                    ...query,
                },
            }),
    },
});
