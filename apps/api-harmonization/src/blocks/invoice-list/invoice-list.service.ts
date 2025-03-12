import { Injectable } from '@nestjs/common';
import { Observable, concatMap, forkJoin, map } from 'rxjs';

import { AppHeaders } from '@o2s/api-harmonization/utils/headers';

import { CMS, Invoices } from '../../models';

import { mapInvoiceList } from './invoice-list.mapper';
import { InvoiceListComponent } from './invoice-list.model';
import { GetInvoiceListComponentQuery } from './invoice-list.request';

@Injectable()
export class InvoiceListService {
    constructor(
        private readonly cmsService: CMS.Service,
        private readonly invoiceService: Invoices.Service,
    ) {}

    getInvoiceListComponent(
        query: GetInvoiceListComponentQuery,
        headers: AppHeaders,
    ): Observable<InvoiceListComponent> {
        const cms = this.cmsService.getInvoiceListComponent({ ...query, locale: headers['x-locale'] });

        return forkJoin([cms]).pipe(
            concatMap(([cms]) => {
                return this.invoiceService
                    .getInvoiceList({
                        ...query,
                        limit: cms.pagination?.limit || query.limit,
                    })
                    .pipe(map((invoices) => mapInvoiceList(invoices, cms, headers['x-locale'])));
            }),
        );
    }

    getInvoicePdf(id: string): Observable<Buffer> {
        return this.invoiceService.getInvoicePdf({ id });
    }
}
