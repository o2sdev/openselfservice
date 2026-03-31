import { Utils } from '@o2s/utils.frontend';

import { AppHeaders } from '@o2s/framework/headers';
import { Sdk } from '@o2s/framework/sdk';

import { Model, Request } from '../api-harmonization/ticket-recent.client';
import { URL } from '../api-harmonization/ticket-recent.url';

const API_URL = URL;

export const ticketRecent = (sdk: Sdk) => ({
    blocks: {
        getTicketRecent: (
            query: Request.GetTicketRecentBlockQuery,
            headers: AppHeaders,
            authorization?: string,
        ): Promise<Model.TicketRecentBlock> =>
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
