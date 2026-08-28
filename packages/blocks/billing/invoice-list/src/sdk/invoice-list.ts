import { AppHeaders } from '@o2s/framework/headers';
import { Sdk, createBlockMethod } from '@o2s/framework/sdk';

import { Model, Request } from '../api-harmonization/invoice-list.client';
import { URL } from '../api-harmonization/invoice-list.url';

const API_URL = URL;

export const invoiceList = (sdk: Sdk) => {
    const request = createBlockMethod(sdk);

    return {
        blocks: {
            getInvoiceList: (
                query: Request.GetInvoiceListBlockQuery,
                headers: AppHeaders,
                authorization?: string,
            ): Promise<Model.InvoiceListBlock> =>
                request({
                    url: API_URL,
                    params: query,
                    headers,
                    authorization,
                }),
            getInvoicePdf: (id: string, headers: AppHeaders, authorization?: string): Promise<Blob> =>
                request({
                    url: `${API_URL}/${encodeURIComponent(id)}/pdf`,
                    responseType: 'blob',
                    headers,
                    authorization,
                }),
        },
    };
};
