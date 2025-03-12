import { Blocks, Headers } from '@o2s/api-harmonization';

import { Sdk } from '@o2s/framework/sdk';

const API_URL = Blocks.TicketRecent.URL;

export const ticketRecent = (sdk: Sdk) => ({
    blocks: {
        getTicketRecent: (
            query: Blocks.TicketRecent.Request.GetTicketRecentComponentQuery,
            headers: Headers.AppHeaders,
            authorization: string,
        ): Promise<Blocks.TicketRecent.Model.TicketRecentComponent> =>
            sdk.makeRequest({
                method: 'get',
                url: `${API_URL}`,
                headers: {
                    ...headers,
                    Authorization: `Bearer ${authorization}`,
                },
                params: query,
            }),
    },
});
