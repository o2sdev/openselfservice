import { Components, Headers } from '@o2s/api-harmonization';

import { Sdk } from '@o2s/framework/sdk';

const API_URL = Components.InvoiceList.URL;

export const invoiceList = (sdk: Sdk) => ({
    components: {
        getInvoiceList: (
            query: Components.InvoiceList.Request.GetInvoiceListComponentQuery,
            headers: Headers.AppHeaders,
            authorization: string,
        ): Promise<Components.InvoiceList.Model.InvoiceListComponent> =>
            sdk.makeRequest({
                method: 'get',
                url: `${API_URL}`,
                headers: {
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
                    ...headers,
                    Authorization: `Bearer ${authorization}`,
                    Accept: 'application/pdf',
                },
            }),
    },
});
