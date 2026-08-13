import { AppHeaders } from '@o2s/framework/headers';
import { Sdk, createBlockMethod } from '@o2s/framework/sdk';

import { Model, Request, URL } from '../api-harmonization/ticket-summary.client';

const API_URL = URL;

export const ticketSummary = (sdk: Sdk) => {
    const request = createBlockMethod(sdk);

    return {
        blocks: {
            getTicketSummary: (
                query: Request.GetTicketSummaryBlockQuery,
                headers: AppHeaders,
                authorization?: string,
            ): Promise<Model.TicketSummaryBlock> =>
                request({
                    url: API_URL,
                    params: query,
                    headers,
                    authorization,
                }),
        },
    };
};
