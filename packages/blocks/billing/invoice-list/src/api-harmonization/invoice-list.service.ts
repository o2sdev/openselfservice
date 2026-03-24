import { Injectable } from '@nestjs/common';
import { CMS, Invoices } from '@o2s/configs.integrations';
import { Observable, concatMap, forkJoin, map } from 'rxjs';

import { AppHeaders, HeaderName } from '@o2s/framework/headers';
import { Auth } from '@o2s/framework/modules';

import { mapInvoiceList } from './invoice-list.mapper';
import { InvoiceListBlock } from './invoice-list.model';
import { GetInvoiceListBlockQuery } from './invoice-list.request';

const H = HeaderName;

@Injectable()
export class InvoiceListService {
    constructor(
        private readonly cmsService: CMS.Service,
        private readonly invoiceService: Invoices.Service,
        private readonly authService: Auth.Service,
    ) {}

    getInvoiceListBlock(query: GetInvoiceListBlockQuery, headers: AppHeaders): Observable<InvoiceListBlock> {
        const authorization = headers[H.Authorization];
        const cms = this.cmsService.getInvoiceListBlock({ ...query, locale: headers[H.Locale] });

        return forkJoin([cms]).pipe(
            concatMap(([cms]) => {
                return this.invoiceService
                    .getInvoiceList(
                        {
                            ...(cms.initialFilters || {}),
                            ...query,
                            limit: query.limit || cms.pagination?.limit || 1,
                            offset: query.offset || 0,
                            locale: headers[H.Locale],
                        },
                        authorization,
                    )
                    .pipe(
                        map((invoices) => {
                            const result = mapInvoiceList(
                                invoices,
                                cms,
                                headers[H.Locale],
                                headers[H.ClientTimezone] || '',
                            );

                            // Extract permissions using ACL service
                            if (authorization) {
                                const permissions = this.authService.canPerformActions(authorization, 'invoices', [
                                    'view',
                                    'create',
                                    'pay',
                                    'delete',
                                ]);

                                result.permissions = {
                                    view: permissions.view ?? false,
                                    create: permissions.create ?? false,
                                    pay: permissions.pay ?? false,
                                    delete: permissions.delete ?? false,
                                };
                            }

                            return result;
                        }),
                    );
            }),
        );
    }

    getInvoicePdf(id: string, headers: AppHeaders): Observable<Buffer> {
        const authorization = headers[H.Authorization];
        return this.invoiceService.getInvoicePdf({ id }, authorization);
    }
}
