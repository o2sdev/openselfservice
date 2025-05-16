import { Blocks, Headers } from '@o2s/api-harmonization';

import { Sdk } from '@o2s/framework/sdk';

import { getApiHeaders } from '../../utils/api';

const API_URL = Blocks.TicketDetails.URL;

export const ticketDetails = (sdk: Sdk) => ({
    blocks: {
        getTicketDetails: (
            params: Blocks.TicketDetails.Request.GetTicketDetailsBlockParams,
            query: Blocks.TicketDetails.Request.GetTicketDetailsBlockQuery,
            headers: Headers.AppHeaders,
            authorization?: string,
        ): Promise<Blocks.TicketDetails.Model.TicketDetailsBlock> =>
            sdk.makeRequest({
                method: 'get',
                url: `${API_URL}/${params.id}`,
                headers: {
                    ...getApiHeaders(),
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
