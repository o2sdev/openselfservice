import { AppHeaders } from '@o2s/framework/headers';
import { Sdk, createBlockRequest } from '@o2s/framework/sdk';

import { Model, Request } from '../api-harmonization/ticket-details.client';
import { URL } from '../api-harmonization/ticket-details.url';

const API_URL = URL;

export const ticketDetails = (sdk: Sdk) => {
    const request = createBlockRequest(sdk);

    return {
        blocks: {
            getTicketDetails: (
                params: Request.GetTicketDetailsBlockParams,
                query: Request.GetTicketDetailsBlockQuery,
                headers: AppHeaders,
                authorization?: string,
            ): Promise<Model.TicketDetailsBlock> =>
                request({
                    url: `${API_URL}/${params.id}`,
                    params: query,
                    headers,
                    authorization,
                }),
        },
    };
};
