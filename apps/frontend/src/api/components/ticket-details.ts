import { Components, Headers } from '@o2s/api-harmonization';

import { Sdk } from '@o2s/framework/sdk';

const API_URL = Components.TicketDetails.URL;

export const ticketDetails = (sdk: Sdk) => ({
    components: {
        getTicketDetails: (
            params: Components.TicketDetails.Request.GetTicketDetailsComponentParams,
            query: Components.TicketDetails.Request.GetTicketDetailsComponentQuery,
            headers: Headers.AppHeaders,
            authorization: string,
        ): Promise<Components.TicketDetails.Model.TicketDetailsComponent> =>
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
