import * as Invoices from '.';
import { Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';

import { GetInvoiceListQuery, GetInvoiceParams } from './invoices.request';

/**
 * Abstract invoice service. Implementation is provided by API Harmonization. All methods return RxJS {@link Observable}.
 */
@Injectable()
export abstract class InvoiceService {
    protected constructor(..._services: unknown[]) {}

    /** Invoice list with pagination and filters (paymentStatus, type, dates, search). */
    abstract getInvoiceList(query: GetInvoiceListQuery, authorization?: string): Observable<Invoices.Model.Invoices>;
    /** Returns a single invoice by id. */
    abstract getInvoice(params: GetInvoiceParams, authorization?: string): Observable<Invoices.Model.Invoice>;
    /** Returns invoice PDF as Buffer. */
    abstract getInvoicePdf(params: GetInvoiceParams, authorization?: string): Observable<Buffer>;
}
