import { AppHeaders } from '@o2s/framework/headers';
import { Sdk, createBlockMethod } from '@o2s/framework/sdk';

import { Model, Request } from '../api-harmonization/ticket-list.client';
import { URL } from '../api-harmonization/ticket-list.url';

const API_URL = URL;

export const ticketList = (sdk: Sdk) => {
    const request = createBlockMethod(sdk);

    return {
        blocks: {
            getTicketList: (
                query: Request.GetTicketListBlockQuery,
                headers: AppHeaders,
                authorization?: string,
            ): Promise<Model.TicketListBlock> =>
                request({
                    url: API_URL,
                    params: query,
                    headers,
                    authorization,
                }),
        },
    };
};
