import { Injectable } from '@nestjs/common';
import { CMS, Invoices } from '@o2s/configs.integrations';
import { Observable, forkJoin, map } from 'rxjs';

import { Models } from '@o2s/utils.api-harmonization';

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
        headers: Models.Headers.AppHeaders,
    ): Observable<PaymentsHistoryBlock> {
        const cms = this.cmsService.getPaymentsHistoryBlock({ ...query, locale: headers['x-locale'] });
        const invoices = this.invoiceService.getInvoiceList(query);

        return forkJoin([cms, invoices]).pipe(
            map(([cms, invoices]) => mapPaymentsHistory(cms, invoices, headers['x-locale'])),
        );
    }
}
