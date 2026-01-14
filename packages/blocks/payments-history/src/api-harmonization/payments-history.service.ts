import { Injectable } from '@nestjs/common';
import { CMS, Invoices } from '@o2s/configs.integrations';
import { Observable, forkJoin, map } from 'rxjs';

import { Models } from '@o2s/utils.api-harmonization';

import { Auth } from '@o2s/framework/modules';

import { mapPaymentsHistory } from './payments-history.mapper';
import { PaymentsHistoryBlock } from './payments-history.model';
import { GetPaymentsHistoryBlockQuery } from './payments-history.request';

@Injectable()
export class PaymentsHistoryService {
    constructor(
        private readonly cmsService: CMS.Service,
        private readonly invoiceService: Invoices.Service,
        private readonly authService: Auth.Service,
    ) {}

    getPaymentsHistoryBlock(
        query: GetPaymentsHistoryBlockQuery,
        headers: Models.Headers.AppHeaders,
    ): Observable<PaymentsHistoryBlock> {
        const cms = this.cmsService.getPaymentsHistoryBlock({ ...query, locale: headers['x-locale'] });
        const invoices = this.invoiceService.getInvoiceList(query);

        return forkJoin([cms, invoices]).pipe(
            map(([cms, invoices]) => {
                const result = mapPaymentsHistory(cms, invoices, headers['x-locale']);

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
                } else {
                    // Default to allowing view if no authorization token
                    result.permissions = {
                        view: true,
                        pay: false,
                    };
                }

                return result;
            }),
        );
    }
}
