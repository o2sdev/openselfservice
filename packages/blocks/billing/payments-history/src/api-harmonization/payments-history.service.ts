import { Injectable } from '@nestjs/common';
import { CMS, Invoices } from '@o2s/configs.integrations';
import dayjs from 'dayjs';
import { Observable, forkJoin, map } from 'rxjs';

import { AppHeaders, HeaderName } from '@o2s/framework/headers';
import { Auth } from '@o2s/framework/modules';

import { mapPaymentsHistory } from './payments-history.mapper';
import { PaymentsHistoryBlock } from './payments-history.model';
import { GetPaymentsHistoryBlockQuery } from './payments-history.request';

const H = HeaderName;

@Injectable()
export class PaymentsHistoryService {
    constructor(
        private readonly cmsService: CMS.Service,
        private readonly invoiceService: Invoices.Service,
        private readonly authService: Auth.Service,
    ) {}

    getPaymentsHistoryBlock(
        query: GetPaymentsHistoryBlockQuery,
        headers: AppHeaders,
    ): Observable<PaymentsHistoryBlock> {
        const cms = this.cmsService.getPaymentsHistoryBlock({ ...query, locale: headers[H.Locale] });
        const invoices = this.invoiceService.getInvoiceList({
            limit: query.limit,
            offset: query.offset,
            locale: headers[H.Locale],
            dateFrom: query.dateFrom ? dayjs(query.dateFrom).toISOString() : undefined,
            dateTo: query.dateTo ? dayjs(query.dateTo).toISOString() : undefined,
        });

        return forkJoin([cms, invoices]).pipe(
            map(([cms, invoices]) => {
                const result = mapPaymentsHistory(cms, invoices, headers[H.Locale]);
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
