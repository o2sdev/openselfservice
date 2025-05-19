import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Observable, forkJoin, map } from 'rxjs';

import { Models } from '@o2s/framework/modules';

import { AppHeaders } from '@o2s/api-harmonization/utils/headers';

import { CMS, Invoices } from '../../models';

import { mapPaymentsSummary } from './payments-summary.mapper';
import { PaymentsSummaryBlock } from './payments-summary.model';
import { GetPaymentsSummaryBlockQuery } from './payments-summary.request';

@Injectable()
export class PaymentsSummaryService {
    private readonly defaultCurrency: Models.Price.Currency;

    constructor(
        private readonly cmsService: CMS.Service,
        private readonly invoiceService: Invoices.Service,
        private readonly configService: ConfigService,
    ) {
        this.defaultCurrency = this.configService.get('DEFAULT_CURRENCY') || 'EUR';
    }

    getPaymentsSummaryBlock(
        query: GetPaymentsSummaryBlockQuery,
        headers: AppHeaders,
    ): Observable<PaymentsSummaryBlock> {
        const cms = this.cmsService.getPaymentsSummaryBlock({ ...query, locale: headers['x-locale'] });
        const invoices = this.invoiceService.getInvoiceList(query);

        return forkJoin([invoices, cms]).pipe(
            map(([invoices, cms]) => mapPaymentsSummary(cms, invoices, headers['x-locale'], this.defaultCurrency)),
        );
    }
}
