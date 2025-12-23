import { Models } from '@o2s/utils.api-harmonization';
import { Utils } from '@o2s/utils.frontend';

import { Sdk } from '@o2s/framework/sdk';

import { Model, Request } from '../api-harmonization/product-details.client';

const API_URL = '/blocks/product-details';

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
                url: `${API_URL}/${params.id}`,
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
