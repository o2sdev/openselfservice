import { Injectable } from '@nestjs/common';
import { CMS, Invoices } from '@o2s/configs.integrations';
import dayjs from 'dayjs';
import { Observable, concatMap, forkJoin, map } from 'rxjs';

import { AppHeaders, HeaderName } from '@o2s/framework/headers';
import { Auth } from '@o2s/framework/modules';

import { mapInvoiceList } from './invoice-list.mapper';
import { InvoiceListBlock } from './invoice-list.model';
import { GetInvoiceListBlockQuery } from './invoice-list.request';

const H = HeaderName;

const DEFAULT_LIMIT = 1;

/** The page size the block renders with: an explicit query value, then the CMS config, then the default. */
const resolveLimit = (query: GetInvoiceListBlockQuery, cmsLimit?: number): number =>
    Number(query.limit) || Number(cmsLimit) || DEFAULT_LIMIT;

/**
 * `offset` wins when given; a 1-based `page` is resolved with the page size above, which is why this
 * lives here and not in the caller: only the API knows the CMS pagination config.
 */
const resolveOffset = (query: GetInvoiceListBlockQuery, limit: number): number => {
    const offset = Number(query.offset);

    if (offset > 0) {
        return offset;
    }

    const page = Number(query.page);

    return page > 1 ? (page - 1) * limit : 0;
};

@Injectable()
export class InvoiceListService {
    constructor(
        private readonly cmsService: CMS.Service,
        private readonly invoiceService: Invoices.Service,
        private readonly authService: Auth.Service,
    ) {}

    getInvoiceListBlock(query: GetInvoiceListBlockQuery, headers: AppHeaders): Observable<InvoiceListBlock> {
        const authorization = headers[H.Authorization];
        const cms = this.cmsService.getBlockConfig<CMS.Model.InvoiceListBlock.InvoiceListBlock>({
            ...query,
            locale: headers[H.Locale],
            blockType: 'InvoiceListBlock',
        });

        return forkJoin([cms]).pipe(
            concatMap(([cms]) => {
                // `page` is a URL concern and is consumed here, so it never reaches the domain module.
                const { page: _page, ...invoiceQuery } = query;
                const limit = resolveLimit(query, cms.pagination?.limit);

                return this.invoiceService
                    .getInvoiceList(
                        {
                            ...(cms.initialFilters || {}),
                            ...invoiceQuery,
                            limit,
                            offset: resolveOffset(query, limit),
                            dateFrom: query.dateFrom ? dayjs(query.dateFrom).toISOString() : undefined,
                            dateTo: query.dateTo ? dayjs(query.dateTo).toISOString() : undefined,
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
