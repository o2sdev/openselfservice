import { Blocks, Headers } from '@o2s/api-harmonization';

import { Sdk } from '@o2s/framework/sdk';

import { getApiHeaders } from '../../utils/api';

const API_URL = Blocks.OrderDetails.URL;

export const orderDetails = (sdk: Sdk) => ({
    blocks: {
        getOrderDetails: (
            params: Blocks.OrderDetails.Request.GetOrderDetailsBlockParams,
            query: Blocks.OrderDetails.Request.GetOrderDetailsBlockQuery,
            headers: Headers.AppHeaders,
            authorization?: string,
        ): Promise<Blocks.OrderDetails.Model.OrderDetailsBlock> =>
            sdk.makeRequest({
                method: 'get',
                url: `${API_URL}/${params.id}`,
                headers: {
                    ...getApiHeaders(),
                    ...headers,
                    Authorization: `Bearer ${authorization}`,
                },
                params: query,
            }),

        getOrderPdf: (id: string, headers: Headers.AppHeaders, authorization?: string): Promise<Blob> =>
            sdk.makeRequest({
                method: 'get',
                url: `${API_URL}/documents/${id}/pdf`,
                responseType: 'blob',
                headers: {
                    ...getApiHeaders(),
                    ...headers,
                    Authorization: `Bearer ${authorization}`,
                    Accept: 'application/pdf',
                },
            }),
    },
});
