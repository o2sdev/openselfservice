import { Models } from '@o2s/utils.api-harmonization';
import { Utils } from '@o2s/utils.frontend';

import { Sdk } from '@o2s/framework/sdk';

import { Model, Request, URL } from '../api-harmonization/invoice-list.client';

const API_URL = URL;

export const invoiceList = (sdk: Sdk) => ({
    blocks: {
        getInvoiceList: (
            query: Request.GetInvoiceListBlockQuery,
            headers: Models.Headers.AppHeaders,
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
        getInvoicePdf: (id: string, headers: Models.Headers.AppHeaders, authorization?: string): Promise<Blob> =>
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
