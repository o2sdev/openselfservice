import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { CMS, Invoices } from '@o2s/configs.integrations';
import { Observable, forkJoin, map } from 'rxjs';

import { Models as ApiModels } from '@o2s/utils.api-harmonization';

import { Auth, Models } from '@o2s/framework/modules';

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
        private readonly authService: Auth.Service,
    ) {
        this.defaultCurrency = this.configService.get('DEFAULT_CURRENCY') || 'EUR';
    }

    getPaymentsSummaryBlock(
        query: GetPaymentsSummaryBlockQuery,
        headers: ApiModels.Headers.AppHeaders,
    ): Observable<PaymentsSummaryBlock> {
        const cms = this.cmsService.getPaymentsSummaryBlock({ ...query, locale: headers['x-locale'] });
        const invoices = this.invoiceService.getInvoiceList(query);

        return forkJoin([invoices, cms]).pipe(
            map(([invoices, cms]) => {
                const result = mapPaymentsSummary(cms, invoices, headers['x-locale'], this.defaultCurrency);

                // Extract permissions using ACL service
                if (headers.authorization) {
                    const permissions = this.authService.canPerformActions(headers.authorization, 'invoices', [
                        'view',
                        'pay',
                    ]);

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
