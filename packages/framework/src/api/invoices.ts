import { RequestMethod } from '../sdk';

import { Model, Request } from '@/modules/invoices';

const API_URL = '/invoices';

export const getInvoicePdf =
    (makeRequest: RequestMethod) =>
    (params: Request.GetInvoiceParams, authorization: string): Promise<Model.Invoice> =>
        makeRequest({
            method: 'get',
            url: `${API_URL}/${params.id}/pdf`,
            responseType: 'blob',
            headers: {
                Authorization: `Bearer ${authorization}`,
                Accept: 'application/pdf, text/plain',
            },
        });

export const getInvoiceList =
    (makeRequest: RequestMethod) =>
    (query: Request.GetInvoiceListQuery, authorization: string): Promise<Model.Invoices> =>
        makeRequest({
            method: 'get',
            url: API_URL,
            headers: {
                Authorization: `Bearer ${authorization}`,
            },
            params: query,
        });
