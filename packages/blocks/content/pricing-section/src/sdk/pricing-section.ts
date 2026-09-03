import { AppHeaders } from '@o2s/framework/headers';
import { Sdk, createBlockRequest } from '@o2s/framework/sdk';

import { Model, Request } from '../api-harmonization/pricing-section.client';
import { URL } from '../api-harmonization/pricing-section.url';

const API_URL = URL;

export const pricingSection = (sdk: Sdk) => {
    const request = createBlockRequest(sdk);

    return {
        blocks: {
            getPricingSection: (
                query: Request.GetPricingSectionBlockQuery,
                headers: AppHeaders,
                authorization?: string,
            ): Promise<Model.PricingSectionBlock> =>
                request({
                    url: API_URL,
                    params: query,
                    headers,
                    authorization,
                }),
        },
    };
};
