import { Blocks, Headers } from '@o2s/api-harmonization';

import { Sdk } from '@o2s/framework/sdk';

import { getApiHeaders } from '../../utils/api';

const API_URL = Blocks.OrderList.URL;

export const orderList = (sdk: Sdk) => ({
    blocks: {
        getOrderList: (
            query: Blocks.OrderList.Request.GetOrderListBlockQuery,
            headers: Headers.AppHeaders,
            authorization?: string,
        ): Promise<Blocks.OrderList.Model.OrderListBlock> =>
            sdk.makeRequest({
                method: 'get',
                url: `${API_URL}`,
                headers: {
                    ...getApiHeaders(),
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
