import { Injectable } from '@nestjs/common';
import { Observable, concatMap, forkJoin, map } from 'rxjs';

import { AppHeaders } from '@o2s/api-harmonization/utils/headers';

import { CMS, Orders } from '../../models';

import { mapOrderList } from './order-list.mapper';
import { OrderListBlock } from './order-list.model';
import { GetOrderListBlockQuery } from './order-list.request';

@Injectable()
export class OrderListService {
    constructor(
        private readonly cmsService: CMS.Service,
        private readonly orderService: Orders.Service,
    ) {}

    getOrderListBlock(query: GetOrderListBlockQuery, headers: AppHeaders): Observable<OrderListBlock> {
        const cms = this.cmsService.getOrderListBlock({ ...query, locale: headers['x-locale'] });

        return forkJoin([cms]).pipe(
            concatMap(([cms]) => {
                return this.orderService
                    .getOrderList(
                        {
                            ...query,
                            limit: query.limit || cms.pagination?.limit || 1,
                            offset: query.offset || 0,
                            locale: headers['x-locale'],
                        },
                        headers['authorization'],
                    )
                    .pipe(
                        map((orders) =>
                            mapOrderList(orders, cms, headers['x-locale'], headers['x-client-timezone'] || ''),
                        ),
                    );
            }),
        );
    }
}
