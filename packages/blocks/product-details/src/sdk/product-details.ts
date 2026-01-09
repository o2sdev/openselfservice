import { Models } from '@o2s/utils.api-harmonization';
import { Utils } from '@o2s/utils.frontend';

import { Sdk } from '@o2s/framework/sdk';

import { Model, Request, URL } from '../api-harmonization/product-details.client';

export const productDetails = (sdk: Sdk) => ({
    blocks: {
        getProductDetails: (
            params: Request.GetProductDetailsBlockParams,
            query?: Request.GetProductDetailsBlockQuery,
            headers?: Models.Headers.AppHeaders,
            authorization?: string,
        ): Promise<Model.ProductDetailsBlock> =>
            sdk.makeRequest({
                method: 'get',
                url: `${URL}/${params.id}`,
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
