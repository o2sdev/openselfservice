import { Components, Headers } from '@o2s/api-harmonization';

import { Sdk } from '@o2s/framework/sdk';

const API_URL = Components.TicketRecent.URL;

export const ticketRecent = (sdk: Sdk) => ({
    components: {
        getTicketRecent: (
            query: Components.TicketRecent.Request.GetTicketRecentComponentQuery,
            headers: Headers.AppHeaders,
            authorization: string,
        ): Promise<Components.TicketRecent.Model.TicketRecentComponent> =>
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
