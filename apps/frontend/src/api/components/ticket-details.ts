import { Blocks, Headers } from '@o2s/api-harmonization';

import { Sdk } from '@o2s/framework/sdk';

const API_URL = Blocks.TicketDetails.URL;

export const ticketDetails = (sdk: Sdk) => ({
    blocks: {
        getTicketDetails: (
            params: Blocks.TicketDetails.Request.GetTicketDetailsComponentParams,
            query: Blocks.TicketDetails.Request.GetTicketDetailsComponentQuery,
            headers: Headers.AppHeaders,
            authorization: string,
        ): Promise<Blocks.TicketDetails.Model.TicketDetailsComponent> =>
            sdk.makeRequest({
                method: 'get',
                url: `${API_URL}/${params.id}`,
                headers: {
                    ...headers,
                    Authorization: `Bearer ${authorization}`,
                },
                params: query,
            }),
    },
});
