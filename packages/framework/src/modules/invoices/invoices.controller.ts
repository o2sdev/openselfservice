import { Controller, Get, Headers, Param, Query, Res, UseInterceptors } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiParam, ApiProduces, ApiQuery, ApiTags } from '@nestjs/swagger';
import type { Response } from 'express';
import { Observable, map } from 'rxjs';

import { LoggerService } from '@o2s/utils.logger';

import { Invoice, PaginatedInvoices } from './invoices.model';
import { GetInvoiceListQuery, GetInvoiceParams } from './invoices.request';
import { InvoiceService } from './invoices.service';
import { AppHeaders, HeaderName } from '@/utils/models/headers';

const H = HeaderName;

/**
 * HTTP controller for invoices. Base path: `/invoices`. All methods delegate to {@link InvoiceService}.
 */
@Controller('/invoices')
@UseInterceptors(LoggerService)
@ApiTags('invoices')
export class InvoiceController {
    constructor(protected readonly invoiceService: InvoiceService) {}

    @Get()
    @ApiOperation({ summary: 'List invoices' })
    @ApiQuery({
        name: 'query',
        required: false,
        type: String,
        description: 'Invoice list filters and pagination query.',
    })
    @ApiOkResponse({ description: 'Returns invoices list.', type: PaginatedInvoices })
    getInvoiceList(@Query() query: GetInvoiceListQuery, @Headers() headers: AppHeaders): Observable<PaginatedInvoices> {
        return this.invoiceService.getInvoiceList(query, headers[H.Authorization]);
    }

    @Get(':id')
    @ApiOperation({ summary: 'Get invoice by id' })
    @ApiParam({ name: 'id', type: String, description: 'Invoice identifier.' })
    @ApiOkResponse({ description: 'Returns invoice details.', type: Invoice })
    getInvoice(@Param() params: GetInvoiceParams, @Headers() headers: AppHeaders): Observable<Invoice> {
        return this.invoiceService.getInvoice(params, headers[H.Authorization]);
    }

    @Get(':id/pdf')
    @ApiOperation({ summary: 'Download invoice PDF' })
    @ApiParam({ name: 'id', type: String, description: 'Invoice identifier.' })
    @ApiProduces('application/pdf')
    @ApiOkResponse({ description: 'Returns invoice PDF file.', schema: { type: 'string', format: 'binary' } })
    getInvoicePdf(
        @Param() params: GetInvoiceParams,
        @Headers() headers: AppHeaders,
        @Res() res: Response,
    ): Observable<void> {
        return this.invoiceService.getInvoicePdf(params, headers[H.Authorization]).pipe(
            map((pdf) => {
                res.setHeader('Content-Type', 'application/pdf');
                res.setHeader('Content-Disposition', `attachment; filename="invoice-${params.id}.pdf"`);
                res.setHeader('Content-Length', pdf.byteLength);
                res.end(pdf);
            }),
        );
    }
}
