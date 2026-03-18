import { Utils } from '@o2s/utils.frontend';

import { AppHeaders } from '@o2s/framework/headers';
import { Sdk } from '@o2s/framework/sdk';

import { Model, Request } from '../api-harmonization/order-details.client';
import { URL } from '../api-harmonization/order-details.url';

const API_URL = URL;

export const orderDetails = (sdk: Sdk) => ({
    blocks: {
        getOrderDetails: (
            params: Request.GetOrderDetailsBlockParams,
            query: Request.GetOrderDetailsBlockQuery,
            headers: AppHeaders,
            authorization?: string,
        ): Promise<Model.OrderDetailsBlock> =>
            sdk.makeRequest({
                method: 'get',
                url: `${API_URL}/${params.id}`,
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
        getOrderPdf: (id: string, headers: AppHeaders, authorization?: string): Promise<Blob> =>
            sdk.makeRequest({
                method: 'get',
                url: `${API_URL}/documents/${id}/pdf`,
                responseType: 'blob',
                headers: {
                    ...Utils.Headers.getApiHeaders(),
                    ...headers,
                    Authorization: `Bearer ${authorization}`,
                    Accept: 'application/pdf',
                },
            }),
    },
});
