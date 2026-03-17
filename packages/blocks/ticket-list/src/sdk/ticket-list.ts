import { Utils } from '@o2s/utils.frontend';

import { AppHeaders } from '@o2s/framework/headers';
import { Sdk } from '@o2s/framework/sdk';

import { Model, Request } from '../api-harmonization/ticket-list.client';
import { URL } from '../api-harmonization/ticket-list.url';

const API_URL = URL;

export const ticketList = (sdk: Sdk) => ({
    blocks: {
        getTicketList: (
            query: Request.GetTicketListBlockQuery,
            headers: AppHeaders,
            authorization?: string,
        ): Promise<Model.TicketListBlock> =>
            sdk.makeRequest({
                method: 'get',
                url: `${API_URL}`,
                headers: {
                    ...Utils.Headers.getApiHeaders(),
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
