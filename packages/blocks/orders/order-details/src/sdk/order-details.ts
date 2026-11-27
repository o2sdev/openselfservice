import { AppHeaders } from '@o2s/framework/headers';
import { Sdk, createBlockRequest } from '@o2s/framework/sdk';

import { Model, Request } from '../api-harmonization/order-details.client';
import { URL } from '../api-harmonization/order-details.url';

const API_URL = URL;

export const orderDetails = (sdk: Sdk) => {
    const request = createBlockRequest(sdk);

    return {
        blocks: {
            getOrderDetails: (
                params: Request.GetOrderDetailsBlockParams,
                query: Request.GetOrderDetailsBlockQuery,
                headers: AppHeaders,
                authorization?: string,
            ): Promise<Model.OrderDetailsBlock> =>
                request({
                    url: `${API_URL}/${params.id}`,
                    params: query,
                    headers,
                    authorization,
                }),
            getOrderPdf: (id: string, headers: AppHeaders, authorization?: string): Promise<Blob> =>
                request({
                    url: `${API_URL}/documents/${id}/pdf`,
                    responseType: 'blob',
                    headers: {
                        ...headers,
                        Accept: 'application/pdf',
                    },
                    authorization,
                }),
        },
    };
};
