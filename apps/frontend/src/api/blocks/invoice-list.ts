import { Blocks, Headers } from '@o2s/api-harmonization';

import { Sdk } from '@o2s/framework/sdk';

import { getApiHeaders } from '../../utils/api';

const API_URL = Blocks.InvoiceList.URL;

export const invoiceList = (sdk: Sdk) => ({
    blocks: {
        getInvoiceList: (
            query: Blocks.InvoiceList.Request.GetInvoiceListBlockQuery,
            headers: Headers.AppHeaders,
            authorization: string,
        ): Promise<Blocks.InvoiceList.Model.InvoiceListBlock> =>
            sdk.makeRequest({
                method: 'get',
                url: `${API_URL}`,
                headers: {
                    ...getApiHeaders(),
                    ...headers,
                    Authorization: `Bearer ${authorization}`,
                },
                params: query,
            }),

        getInvoicePdf: (id: string, headers: Headers.AppHeaders, authorization: string): Promise<Blob> =>
            sdk.makeRequest({
                method: 'get',
                url: `${API_URL}/${id}/pdf`,
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
