import { Injectable } from '@nestjs/common';
import { Observable, forkJoin, map } from 'rxjs';

import { AppHeaders } from '@o2s/api-harmonization/utils/headers';

import { CMS, Invoices } from '../../models';

import { mapPaymentsHistory } from './payments-history.mapper';
import { PaymentsHistoryBlock } from './payments-history.model';
import { GetPaymentsHistoryBlockQuery } from './payments-history.request';

@Injectable()
export class PaymentsHistoryService {
    constructor(
        private readonly cmsService: CMS.Service,
        private readonly invoiceService: Invoices.Service,
    ) {}

    getPaymentsHistoryBlock(
        query: GetPaymentsHistoryBlockQuery,
        headers: AppHeaders,
    ): Observable<PaymentsHistoryBlock> {
        const cms = this.cmsService.getPaymentsHistoryBlock({ ...query, locale: headers['x-locale'] });
        const invoices = this.invoiceService.getInvoiceList(query);

        return forkJoin([cms, invoices]).pipe(
            map(([cms, invoices]) => mapPaymentsHistory(cms, invoices, headers['x-locale'])),
        );
    }
}
