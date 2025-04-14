import { Controller, Get, Headers, Param, Query, Res, UseInterceptors } from '@nestjs/common';
import { LoggerService } from '@o2s/utils.logger';
import type { Response } from 'express';
import { Observable, map } from 'rxjs';

import { Auth } from '@o2s/framework/modules';

import { AppHeaders } from '@o2s/api-harmonization/utils/headers';

import { URL } from './';
import { GetInvoiceListBlockQuery } from './invoice-list.request';
import { InvoiceListService } from './invoice-list.service';

@Controller(URL)
@UseInterceptors(LoggerService)
export class InvoiceListController {
    constructor(protected readonly service: InvoiceListService) {}

    @Get()
    @Auth.Decorators.Roles({ roles: [Auth.Constants.Roles.USER, Auth.Constants.Roles.ADMIN] })
    getInvoiceListBlock(@Headers() headers: AppHeaders, @Query() query: GetInvoiceListBlockQuery) {
        return this.service.getInvoiceListBlock(query, headers);
    }

    @Get(':id/pdf')
    @Auth.Decorators.Roles({ roles: [Auth.Constants.Roles.USER, Auth.Constants.Roles.ADMIN] })
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
