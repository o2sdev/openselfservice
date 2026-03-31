import { Utils } from '@o2s/utils.frontend';

import { AppHeaders } from '@o2s/framework/headers';
import { Sdk } from '@o2s/framework/sdk';

import { Model, Request } from '../api-harmonization/pricing-section.client';
import { URL } from '../api-harmonization/pricing-section.url';

const API_URL = URL;

export const pricingSection = (sdk: Sdk) => ({
    blocks: {
        getPricingSection: (
            query: Request.GetPricingSectionBlockQuery,
            headers: AppHeaders,
            authorization?: string,
        ): Promise<Model.PricingSectionBlock> =>
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
