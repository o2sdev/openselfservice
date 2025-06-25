import * as Invoices from '.';
import { Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';

import { GetInvoiceListQuery, GetInvoiceParams } from './invoices.request';

@Injectable()
export abstract class InvoiceService {
    protected constructor(..._services: unknown[]) {}

    abstract getInvoiceList(query: GetInvoiceListQuery, authorization?: string): Observable<Invoices.Model.Invoices>;
    abstract getInvoice(params: GetInvoiceParams, authorization?: string): Observable<Invoices.Model.Invoice>;

    abstract getInvoicePdf(params: GetInvoiceParams, authorization?: string): Observable<Buffer>;
}
