import { Utils } from '@o2s/utils.frontend';

import { AppHeaders } from '@o2s/framework/headers';
import { Sdk } from '@o2s/framework/sdk';

import { Model, Request, URL } from '../api-harmonization/ticket-summary.client';

const API_URL = URL;

export const ticketSummary = (sdk: Sdk) => ({
    blocks: {
        getTicketSummary: (
            query: Request.GetTicketSummaryBlockQuery,
            headers: AppHeaders,
            authorization?: string,
        ): Promise<Model.TicketSummaryBlock> =>
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
