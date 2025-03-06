import { Injectable } from '@nestjs/common';
import { Observable, forkJoin, map } from 'rxjs';

import { AppHeaders } from '@o2s/api-harmonization/utils/headers';

import { CMS, Invoices } from '../../models';

import { mapPaymentsSummary } from './payments-summary.mapper';
import { PaymentsSummaryComponent } from './payments-summary.model';
import { GetPaymentsSummaryComponentQuery } from './payments-summary.request';

@Injectable()
export class PaymentsSummaryService {
    constructor(
        private readonly cmsService: CMS.Service,
        private readonly invoiceService: Invoices.Service,
    ) {}

    getPaymentsSummaryComponent(
        query: GetPaymentsSummaryComponentQuery,
        headers: AppHeaders,
    ): Observable<PaymentsSummaryComponent> {
        const cms = this.cmsService.getPaymentsSummaryComponent({ ...query, locale: headers['x-locale'] });
        const invoices = this.invoiceService.getInvoiceList(query);

        return forkJoin([invoices, cms]).pipe(
            map(([invoices, cms]) => mapPaymentsSummary(cms, invoices, headers['x-locale'])),
        );
    }
}
