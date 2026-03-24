import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { CMS, Invoices } from '@o2s/configs.integrations';
import dayjs from 'dayjs';
import { Observable, forkJoin, map } from 'rxjs';

import { AppHeaders, HeaderName } from '@o2s/framework/headers';
import { Auth, Models } from '@o2s/framework/modules';

import { mapPaymentsSummary } from './payments-summary.mapper';
import { PaymentsSummaryBlock } from './payments-summary.model';
import { GetPaymentsSummaryBlockQuery } from './payments-summary.request';

const H = HeaderName;

@Injectable()
export class PaymentsSummaryService {
    private readonly defaultCurrency: Models.Price.Currency;

    constructor(
        private readonly cmsService: CMS.Service,
        private readonly invoiceService: Invoices.Service,
        private readonly configService: ConfigService,
        private readonly authService: Auth.Service,
    ) {
        this.defaultCurrency = this.configService.get('DEFAULT_CURRENCY') || 'EUR';
    }

    getPaymentsSummaryBlock(
        query: GetPaymentsSummaryBlockQuery,
        headers: AppHeaders,
    ): Observable<PaymentsSummaryBlock> {
        const cms = this.cmsService.getPaymentsSummaryBlock({ ...query, locale: headers[H.Locale] });
        const invoices = this.invoiceService.getInvoiceList({
            limit: query.limit,
            offset: query.offset,
            locale: headers[H.Locale],
            dateFrom: query.dateFrom ? dayjs(query.dateFrom).toISOString() : undefined,
            dateTo: query.dateTo ? dayjs(query.dateTo).toISOString() : undefined,
        });

        return forkJoin([invoices, cms]).pipe(
            map(([invoices, cms]) => {
                const result = mapPaymentsSummary(cms, invoices, headers[H.Locale], this.defaultCurrency);
                const authorization = headers[H.Authorization];

                // Extract permissions using ACL service
                if (authorization) {
                    const permissions = this.authService.canPerformActions(authorization, 'invoices', ['view', 'pay']);

                    result.permissions = {
                        view: permissions.view ?? false,
                        pay: permissions.pay ?? false,
                    };
                }

                return result;
            }),
        );
    }
}
