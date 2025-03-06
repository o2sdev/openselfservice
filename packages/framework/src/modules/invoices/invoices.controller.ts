import * as Invoices from '.';
import { Controller, Get, Param, Query, Res, UseInterceptors } from '@nestjs/common';
import { LoggerService } from '@o2s/utils.logger';
import type { Response } from 'express';
import { Observable, map } from 'rxjs';

import { GetInvoiceListQuery, GetInvoiceParams } from './invoices.request';
import { InvoiceService } from './invoices.service';

@Controller('/invoices')
@UseInterceptors(LoggerService)
export class InvoiceController {
    constructor(protected readonly invoiceService: InvoiceService) {}

    @Get()
    getInvoiceList(@Query() query: GetInvoiceListQuery): Observable<Invoices.Model.Invoices> {
        return this.invoiceService.getInvoiceList(query);
    }

    @Get(':id')
    getInvoice(@Param() params: GetInvoiceParams): Observable<Invoices.Model.Invoice> {
        return this.invoiceService.getInvoice(params);
    }

    @Get(':id/pdf')
    getInvoicePdf(@Param() params: GetInvoiceParams, @Res() res: Response): Observable<void> {
        return this.invoiceService.getInvoicePdf(params).pipe(
            map((pdf) => {
                res.setHeader('Content-Type', 'application/pdf');
                res.setHeader('Content-Disposition', `attachment; filename="invoice-${params.id}.pdf"`);
                res.setHeader('Content-Length', pdf.byteLength);
                res.end(pdf);
            }),
        );
    }
}
