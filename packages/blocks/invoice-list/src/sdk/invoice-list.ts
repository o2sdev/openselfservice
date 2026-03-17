import { Utils } from '@o2s/utils.frontend';

import { AppHeaders } from '@o2s/framework/headers';
import { Sdk } from '@o2s/framework/sdk';

import { Model, Request } from '../api-harmonization/invoice-list.client';
import { URL } from '../api-harmonization/invoice-list.url';

const API_URL = URL;

export const invoiceList = (sdk: Sdk) => ({
    blocks: {
        getInvoiceList: (
            query: Request.GetInvoiceListBlockQuery,
            headers: AppHeaders,
            authorization?: string,
        ): Promise<Model.InvoiceListBlock> =>
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
        getInvoicePdf: (id: string, headers: AppHeaders, authorization?: string): Promise<Blob> =>
            sdk.makeRequest({
                method: 'get',
                url: `${API_URL}/${id}/pdf`,
                headers: {
                    ...Utils.Headers.getApiHeaders(),
                    ...headers,
                    ...(authorization
                        ? {
                              Authorization: `Bearer ${authorization}`,
                          }
                        : {}),
                },
                responseType: 'blob',
            }),
    },
});
