import { Injectable } from '@nestjs/common';
import { CMS, Invoices } from '@o2s/configs.integrations';
import { Observable, concatMap, forkJoin, map } from 'rxjs';

import { Models } from '@o2s/utils.api-harmonization';

import { Auth } from '@o2s/framework/modules';

import { mapInvoiceList } from './invoice-list.mapper';
import { InvoiceListBlock } from './invoice-list.model';
import { GetInvoiceListBlockQuery } from './invoice-list.request';

@Injectable()
export class InvoiceListService {
    constructor(
        private readonly cmsService: CMS.Service,
        private readonly invoiceService: Invoices.Service,
        private readonly authService: Auth.Service,
    ) {}

    getInvoiceListBlock(
        query: GetInvoiceListBlockQuery,
        headers: Models.Headers.AppHeaders,
    ): Observable<InvoiceListBlock> {
        const cms = this.cmsService.getInvoiceListBlock({ ...query, locale: headers['x-locale'] });

        return forkJoin([cms]).pipe(
            concatMap(([cms]) => {
                return this.invoiceService
                    .getInvoiceList({
                        ...(cms.initialFilters || {}),
                        ...query,
                        limit: query.limit || cms.pagination?.limit || 1,
                        offset: query.offset || 0,
                        locale: headers['x-locale'],
                    })
                    .pipe(
                        map((invoices) => {
                            const result = mapInvoiceList(
                                invoices,
                                cms,
                                headers['x-locale'],
                                headers['x-client-timezone'] || '',
                            );

                            // Extract permissions using ACL service
                            if (headers.authorization) {
                                const permissions = this.authService.canPerformActions(
                                    headers.authorization,
                                    'invoices',
                                    ['view', 'create', 'pay', 'delete'],
                                );

                                result.permissions = {
                                    view: permissions.view ?? false,
                                    create: permissions.create ?? false,
                                    pay: permissions.pay ?? false,
                                    delete: permissions.delete ?? false,
                                };
                            } else {
                                // Default to allowing view if no authorization token
                                result.permissions = {
                                    view: true,
                                    create: false,
                                    pay: false,
                                    delete: false,
                                };
                            }

                            return result;
                        }),
                    );
            }),
        );
    }

    getInvoicePdf(id: string): Observable<Buffer> {
        return this.invoiceService.getInvoicePdf({ id });
    }
}
