import * as Invoices from '.';
import { Controller, Get, Headers, Param, Query, Res, UseInterceptors } from '@nestjs/common';
import type { Response } from 'express';
import { Observable, map } from 'rxjs';

import { LoggerService } from '@o2s/utils.logger';

import { GetInvoiceListQuery, GetInvoiceParams } from './invoices.request';
import { InvoiceService } from './invoices.service';
import { AppHeaders } from '@/utils/models/headers';

@Controller('/invoices')
@UseInterceptors(LoggerService)
export class InvoiceController {
    constructor(protected readonly invoiceService: InvoiceService) {}

    @Get()
    getInvoiceList(
        @Query() query: GetInvoiceListQuery,
        @Headers() headers: AppHeaders,
    ): Observable<Invoices.Model.Invoices> {
        return this.invoiceService.getInvoiceList(query, headers.authorization);
    }

    @Get(':id')
    getInvoice(@Param() params: GetInvoiceParams, @Headers() headers: AppHeaders): Observable<Invoices.Model.Invoice> {
        return this.invoiceService.getInvoice(params, headers.authorization);
    }

    @Get(':id/pdf')
    getInvoicePdf(
        @Param() params: GetInvoiceParams,
        @Headers() headers: AppHeaders,
        @Res() res: Response,
    ): Observable<void> {
        return this.invoiceService.getInvoicePdf(params, headers.authorization).pipe(
            map((pdf) => {
                res.setHeader('Content-Type', 'application/pdf');
                res.setHeader('Content-Disposition', `attachment; filename="invoice-${params.id}.pdf"`);
                res.setHeader('Content-Length', pdf.byteLength);
                res.end(pdf);
            }),
        );
    }
}
