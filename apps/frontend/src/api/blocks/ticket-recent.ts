import { Blocks, Headers } from '@o2s/api-harmonization';

import { Sdk } from '@o2s/framework/sdk';

import { getApiHeaders } from '../../utils/api';

const API_URL = Blocks.TicketRecent.URL;

export const ticketRecent = (sdk: Sdk) => ({
    blocks: {
        getTicketRecent: (
            query: Blocks.TicketRecent.Request.GetTicketRecentBlockQuery,
            headers: Headers.AppHeaders,
            authorization: string,
        ): Promise<Blocks.TicketRecent.Model.TicketRecentBlock> =>
            sdk.makeRequest({
                method: 'get',
                url: `${API_URL}`,
                headers: {
                    ...getApiHeaders(),
                    ...headers,
                    Authorization: `Bearer ${authorization}`,
                },
                params: query,
            }),
    },
});
