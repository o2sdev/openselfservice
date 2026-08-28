import { AppHeaders } from '@o2s/framework/headers';
import { Sdk, createBlockRequest } from '@o2s/framework/sdk';

import { Model, Request } from '../api-harmonization/hero-section.client';
import { URL } from '../api-harmonization/hero-section.url';

const API_URL = URL;

export const heroSection = (sdk: Sdk) => {
    const request = createBlockRequest(sdk);

    return {
        blocks: {
            getHeroSection: (
                query: Request.GetHeroSectionBlockQuery,
                headers: AppHeaders,
                authorization?: string,
            ): Promise<Model.HeroSectionBlock> =>
                request({
                    url: API_URL,
                    params: query,
                    headers,
                    authorization,
                }),
        },
    };
};
