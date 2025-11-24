import { Injectable } from '@nestjs/common';
import { CMS, Invoices } from '@o2s/configs.integrations';
import { Observable, concatMap, forkJoin, map } from 'rxjs';

import { Models } from '@o2s/utils.api-harmonization';

import { mapInvoiceList } from './invoice-list.mapper';
import { InvoiceListBlock } from './invoice-list.model';
import { GetInvoiceListBlockQuery } from './invoice-list.request';

@Injectable()
export class InvoiceListService {
    constructor(
        private readonly cmsService: CMS.Service,
        private readonly invoiceService: Invoices.Service,
    ) {}

    getInvoiceListBlock(
        query: GetInvoiceListBlockQuery,
        headers: Models.Headers.AppHeaders,
    ): Observable<InvoiceListBlock> {
        const cms = this.cmsService.getInvoiceListBlock({ ...query, locale: headers['x-locale'] });

        return forkJoin([cms]).pipe(
            concatMap(([cms]) => {
                return this.invoiceService
                    .getInvoiceList({
                        ...(cms.initialFilters || {}),
                        ...query,
                        limit: cms.pagination?.limit || query.limit,
                    })
                    .pipe(
                        map((invoices) =>
                            mapInvoiceList(invoices, cms, headers['x-locale'], headers['x-client-timezone'] || ''),
                        ),
                    );
            }),
        );
    }

    getInvoicePdf(id: string): Observable<Buffer> {
        return this.invoiceService.getInvoicePdf({ id });
    }
}
