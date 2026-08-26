import { Injectable } from '@nestjs/common';
import { CMS, Orders } from '@o2s/configs.integrations';
import { Observable, concatMap, forkJoin, map } from 'rxjs';

import { AppHeaders, HeaderName } from '@o2s/framework/headers';
import { Auth } from '@o2s/framework/modules';

import { mapOrderList } from './order-list.mapper';
import { OrderListBlock } from './order-list.model';
import { GetOrderListBlockQuery } from './order-list.request';

const H = HeaderName;

const DEFAULT_LIMIT = 1;

/** The page size the block renders with: an explicit query value, then the CMS config, then the default. */
const resolveLimit = (query: GetOrderListBlockQuery, cmsLimit?: number): number =>
    Number(query.limit) || Number(cmsLimit) || DEFAULT_LIMIT;

/**
 * `offset` wins when given; a 1-based `page` is resolved with the page size above, which is why this
 * lives here and not in the caller: only the API knows the CMS pagination config.
 */
const resolveOffset = (query: GetOrderListBlockQuery, limit: number): number => {
    const offset = Number(query.offset);

    if (offset > 0) {
        return offset;
    }

    const page = Number(query.page);

    return page > 1 ? (page - 1) * limit : 0;
};

@Injectable()
export class OrderListService {
    constructor(
        private readonly cmsService: CMS.Service,
        private readonly orderService: Orders.Service,
        private readonly authService: Auth.Service,
    ) {}

    getOrderListBlock(query: GetOrderListBlockQuery, headers: AppHeaders): Observable<OrderListBlock> {
        const authorization = headers[H.Authorization];
        const cms = this.cmsService.getBlockConfig<CMS.Model.OrderListBlock.OrderListBlock>({
            ...query,
            locale: headers[H.Locale],
            blockType: 'OrderListBlock',
        });

        return forkJoin([cms]).pipe(
            concatMap(([cms]) => {
                // `page` is a URL concern and is consumed here, so it never reaches the domain module.
                const { page: _page, ...orderQuery } = query;
                const limit = resolveLimit(query, cms.pagination?.limit);

                return this.orderService
                    .getOrderList(
                        {
                            ...(cms.initialFilters || {}),
                            ...orderQuery,
                            limit,
                            offset: resolveOffset(query, limit),
                            locale: headers[H.Locale],
                        },
                        authorization,
                    )
                    .pipe(
                        map((orders) => {
                            const result = mapOrderList(
                                orders,
                                cms,
                                headers[H.Locale],
                                headers[H.ClientTimezone] || '',
                            );

                            // Extract permissions using ACL service
                            if (authorization) {
                                const permissions = this.authService.canPerformActions(authorization, 'orders', [
                                    'view',
                                    'create',
                                    'cancel',
                                    'track',
                                ]);

                                result.permissions = {
                                    view: permissions.view ?? false,
                                    create: permissions.create ?? false,
                                    cancel: permissions.cancel ?? false,
                                    track: permissions.track ?? false,
                                };
                            }

                            return result;
                        }),
                    );
            }),
        );
    }
}
