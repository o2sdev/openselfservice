import { AppHeaders } from '@o2s/framework/headers';
import { Sdk, createBlockMethod } from '@o2s/framework/sdk';

import { Model, Request } from '../api-harmonization/ticket-recent.client';
import { URL } from '../api-harmonization/ticket-recent.url';

const API_URL = URL;

export const ticketRecent = (sdk: Sdk) => {
    const request = createBlockMethod(sdk);

    return {
        blocks: {
            getTicketRecent: (
                query: Request.GetTicketRecentBlockQuery,
                headers: AppHeaders,
                authorization?: string,
            ): Promise<Model.TicketRecentBlock> =>
                request({
                    url: API_URL,
                    params: query,
                    headers,
                    authorization,
                }),
        },
    };
};
