import { Models } from '@o2s/utils.api-harmonization';
import { Utils } from '@o2s/utils.frontend';

import { Sdk } from '@o2s/framework/sdk';

import { Model, Request } from '../api-harmonization/order-list.client';
import { URL } from '../api-harmonization/order-list.url';

export const orderList = (sdk: Sdk) => ({
    blocks: {
        getOrderList: (
            query: Request.GetOrderListBlockQuery,
            headers: Models.Headers.AppHeaders,
            authorization?: string,
        ): Promise<Model.OrderListBlock> =>
            sdk.makeRequest({
                method: 'get',
                url: `${URL}`,
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
