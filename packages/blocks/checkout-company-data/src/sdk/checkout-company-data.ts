import { Models } from '@o2s/utils.api-harmonization';
import { Utils } from '@o2s/utils.frontend';

import { Sdk } from '@o2s/framework/sdk';

import { Model, Request, URL } from '../api-harmonization/checkout-company-data.client';

const API_URL = URL;

export const checkoutCompanyData = (sdk: Sdk) => ({
    blocks: {
        getCheckoutCompanyData: (
            query: Request.GetCheckoutCompanyDataBlockQuery,
            headers: Models.Headers.AppHeaders,
            authorization?: string,
        ): Promise<Model.CheckoutCompanyDataBlock> =>
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
    },
});
