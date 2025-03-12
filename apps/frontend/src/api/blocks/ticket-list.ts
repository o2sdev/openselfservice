import { Blocks, Headers } from '@o2s/api-harmonization';

import { Sdk } from '@o2s/framework/sdk';

const API_URL = Blocks.TicketList.URL;

export const ticketList = (sdk: Sdk) => ({
    blocks: {
        getTicketList: (
            query: Blocks.TicketList.Request.GetTicketListBlockQuery,
            headers: Headers.AppHeaders,
            authorization: string,
        ): Promise<Blocks.TicketList.Model.TicketListBlock> =>
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
