import { Models } from '@o2s/utils.api-harmonization';
import { Utils } from '@o2s/utils.frontend';

import { Sdk, createBlockMethod } from '@o2s/framework/sdk';

import { Model, Request } from '../api-harmonization/ticket-list.client';
import { URL } from '../api-harmonization/ticket-list.url';

const API_URL = URL;

export const ticketList = (sdk: Sdk) => ({
    blocks: {
        getTicketList: (
            query: Request.GetTicketListBlockQuery,
            headers: Models.Headers.AppHeaders,
            authorization?: string,
        ): Promise<Model.TicketListBlock> =>
            createBlockMethod<Model.TicketListBlock>({
                sdk,
                request: {
                    method: 'get',
                    url: `${API_URL}`,
                    headers,
                    authorization,
                    params: query,
                },
                getDefaultHeaders: Utils.Headers.getApiHeaders,
            }),
    },
});
