import { Injectable } from '@nestjs/common';
import { Observable, forkJoin, map } from 'rxjs';

import { AppHeaders } from '@o2s/api-harmonization/utils/headers';

import { CMS, Invoices } from '../../models';

import { mapPaymentsSummary } from './payments-summary.mapper';
import { PaymentsSummaryBlock } from './payments-summary.model';
import { GetPaymentsSummaryBlockQuery } from './payments-summary.request';

@Injectable()
export class PaymentsSummaryService {
    constructor(
        private readonly cmsService: CMS.Service,
        private readonly invoiceService: Invoices.Service,
    ) {}

    getPaymentsSummaryBlock(
        query: GetPaymentsSummaryBlockQuery,
        headers: AppHeaders,
    ): Observable<PaymentsSummaryBlock> {
        const cms = this.cmsService.getPaymentsSummaryBlock({ ...query, locale: headers['x-locale'] });
        const invoices = this.invoiceService.getInvoiceList(query);

        return forkJoin([invoices, cms]).pipe(
            map(([invoices, cms]) => mapPaymentsSummary(cms, invoices, headers['x-locale'])),
        );
    }
}
