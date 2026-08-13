import { AppHeaders } from '@o2s/framework/headers';
import { Sdk, createBlockMethod } from '@o2s/framework/sdk';

import { Model, Request } from '../api-harmonization/order-list.client';
import { URL } from '../api-harmonization/order-list.url';

export const orderList = (sdk: Sdk) => {
    const request = createBlockMethod(sdk);

    return {
        blocks: {
            getOrderList: (
                query: Request.GetOrderListBlockQuery,
                headers: AppHeaders,
                authorization?: string,
            ): Promise<Model.OrderListBlock> =>
                request({
                    url: URL,
                    params: query,
                    headers,
                    authorization,
                }),
        },
    };
};
