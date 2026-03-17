import { Utils } from '@o2s/utils.frontend';

import { AppHeaders } from '@o2s/framework/headers';
import { Sdk } from '@o2s/framework/sdk';

import { Model, Request } from '../api-harmonization/hero-section.client';
import { URL } from '../api-harmonization/hero-section.url';

const API_URL = URL;

export const heroSection = (sdk: Sdk) => ({
    blocks: {
        getHeroSection: (
            query: Request.GetHeroSectionBlockQuery,
            headers: AppHeaders,
            authorization?: string,
        ): Promise<Model.HeroSectionBlock> =>
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
