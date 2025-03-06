import { Components, Headers } from '@o2s/api-harmonization';

import { Sdk } from '@o2s/framework/sdk';

const API_URL = Components.TicketList.URL;

export const ticketList = (sdk: Sdk) => ({
    components: {
        getTicketList: (
            query: Components.TicketList.Request.GetTicketListComponentQuery,
            headers: Headers.AppHeaders,
            authorization: string,
        ): Promise<Components.TicketList.Model.TicketListComponent> =>
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
