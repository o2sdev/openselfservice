import { Injectable } from '@nestjs/common';
import { CMS, Orders } from '@o2s/configs.integrations';
import { Observable, concatMap, forkJoin, map } from 'rxjs';

import { AppHeaders, HeaderName } from '@o2s/framework/headers';
import { Auth } from '@o2s/framework/modules';

import { mapOrderList } from './order-list.mapper';
import { OrderListBlock } from './order-list.model';
import { GetOrderListBlockQuery } from './order-list.request';

const H = HeaderName;

@Injectable()
export class OrderListService {
    constructor(
        private readonly cmsService: CMS.Service,
        private readonly orderService: Orders.Service,
        private readonly authService: Auth.Service,
    ) {}

    getOrderListBlock(query: GetOrderListBlockQuery, headers: AppHeaders): Observable<OrderListBlock> {
        const cms = this.cmsService.getOrderListBlock({ ...query, locale: headers[H.Locale] });

        return forkJoin([cms]).pipe(
            concatMap(([cms]) => {
                return this.orderService
                    .getOrderList(
                        {
                            ...(cms.initialFilters || {}),
                            ...query,
                            limit: query.limit || cms.pagination?.limit || 1,
                            offset: query.offset || 0,
                            locale: headers[H.Locale],
                        },
                        headers[H.Authorization],
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
                            if (headers[H.Authorization]) {
                                const permissions = this.authService.canPerformActions(
                                    headers[H.Authorization],
                                    'orders',
                                    ['view', 'create', 'cancel', 'track'],
                                );

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
