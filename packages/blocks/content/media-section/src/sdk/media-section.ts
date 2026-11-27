import { AppHeaders } from '@o2s/framework/headers';
import { Sdk, createBlockRequest } from '@o2s/framework/sdk';

import { Model, Request } from '../api-harmonization/media-section.client';
import { URL } from '../api-harmonization/media-section.url';

const API_URL = URL;

export const mediaSection = (sdk: Sdk) => {
    const request = createBlockRequest(sdk);

    return {
        blocks: {
            getMediaSection: (
                query: Request.GetMediaSectionBlockQuery,
                headers: AppHeaders,
                authorization?: string,
            ): Promise<Model.MediaSectionBlock> =>
                request({
                    url: API_URL,
                    params: query,
                    headers,
                    authorization,
                }),
        },
    };
};
