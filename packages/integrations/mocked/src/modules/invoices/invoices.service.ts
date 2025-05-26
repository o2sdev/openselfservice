import { Injectable } from '@nestjs/common';
import { readFileSync } from 'fs';
import { join } from 'path';
import { Observable, of } from 'rxjs';

import { Invoices } from '@o2s/framework/modules';

import { responseDelay } from '@/utils/delay';

import { mapInvoice, mapInvoices } from './invoices.mapper';

@Injectable()
export class InvoicesService implements Invoices.Service {
    getInvoiceList(query: Invoices.Request.GetInvoiceListQuery): Observable<Invoices.Model.Invoices> {
        return of(mapInvoices(query)).pipe(responseDelay());
    }

    getInvoice(params: Invoices.Request.GetInvoiceParams): Observable<Invoices.Model.Invoice> {
        return of(mapInvoice(params.id)).pipe(responseDelay());
    }

    getInvoicePdf(_params: Invoices.Request.GetInvoiceParams): Observable<Buffer> {
        const pdfPath = join(__dirname, 'resources', 'invoice-sample.pdf');
        const pdf = readFileSync(pdfPath);
        return of(pdf).pipe(responseDelay());
    }
}
