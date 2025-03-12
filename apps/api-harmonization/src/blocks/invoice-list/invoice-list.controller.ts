import { Controller, Get, Headers, Param, Query, Res, UseInterceptors } from '@nestjs/common';
import { LoggerService } from '@o2s/utils.logger';
import type { Response } from 'express';
import { Observable, map } from 'rxjs';

import { AppHeaders } from '@o2s/api-harmonization/utils/headers';

import { URL } from './';
import { GetInvoiceListComponentQuery } from './invoice-list.request';
import { InvoiceListService } from './invoice-list.service';

@Controller(URL)
@UseInterceptors(LoggerService)
export class InvoiceListController {
    constructor(protected readonly service: InvoiceListService) {}

    @Get()
    getInvoiceListComponent(@Headers() headers: AppHeaders, @Query() query: GetInvoiceListComponentQuery) {
        return this.service.getInvoiceListComponent(query, headers);
    }

    @Get(':id/pdf')
    getInvoicePdf(@Param('id') id: string, @Res() res: Response): Observable<void> {
        return this.service.getInvoicePdf(id).pipe(
            map((pdf) => {
                res.setHeader('Content-Type', 'application/pdf');
                res.setHeader('Content-Disposition', `attachment; filename="invoice-${id}.pdf"`);
                res.setHeader('Content-Length', pdf.byteLength);
                res.end(pdf);
            }),
        );
    }
}
