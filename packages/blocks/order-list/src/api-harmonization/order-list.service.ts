import { Injectable } from '@nestjs/common';
import { CMS, Orders } from '@o2s/configs.integrations';
import { Observable, concatMap, forkJoin, map } from 'rxjs';

import { Models as ApiModels } from '@o2s/utils.api-harmonization';

import { Auth } from '@o2s/framework/modules';

import { mapOrderList } from './order-list.mapper';
import { OrderListBlock } from './order-list.model';
import { GetOrderListBlockQuery } from './order-list.request';

@Injectable()
export class OrderListService {
    constructor(
        private readonly cmsService: CMS.Service,
        private readonly orderService: Orders.Service,
        private readonly permissionsService: Auth.Permissions.Service,
    ) {}

    getOrderListBlock(
        query: GetOrderListBlockQuery,
        headers: ApiModels.Headers.AppHeaders,
    ): Observable<OrderListBlock> {
        const cms = this.cmsService.getOrderListBlock({ ...query, locale: headers['x-locale'] });

        return forkJoin([cms]).pipe(
            concatMap(([cms]) => {
                return this.orderService
                    .getOrderList(
                        {
                            ...(cms.initialFilters || {}),
                            ...query,
                            limit: query.limit || cms.pagination?.limit || 1,
                            offset: query.offset || 0,
                            locale: headers['x-locale'],
                        },
                        headers['authorization'],
                    )
                    .pipe(
                        map((orders) => {
                            const result = mapOrderList(
                                orders,
                                cms,
                                headers['x-locale'],
                                headers['x-client-timezone'] || '',
                            );

                            // Extract permissions using ACL service
                            if (headers.authorization) {
                                const permissions = this.permissionsService.checkResourceActions(
                                    headers.authorization,
                                    'orders',
                                    ['view', 'create', 'cancel', 'track'],
                                );

                                result.permissions = {
                                    view: permissions.view ?? false,
                                    create: permissions.create ?? false,
                                    cancel: permissions.cancel ?? false,
                                    track: permissions.track ?? false,
                                };
                            } else {
                                // Default to allowing view if no authorization token
                                result.permissions = {
                                    view: true,
                                    create: false,
                                    cancel: false,
                                    track: false,
                                };
                            }

                            return result;
                        }),
                    );
            }),
        );
    }
}
