import { Injectable } from '@nestjs/common';
import { CMS, Orders } from '@o2s/configs.integrations';
import dayjs from 'dayjs';
import { Observable, forkJoin, map } from 'rxjs';

import { AppHeaders, HeaderName } from '@o2s/framework/headers';
import { Auth } from '@o2s/framework/modules';

import { mapOrdersSummary } from './orders-summary.mapper';
import { OrdersSummaryBlock } from './orders-summary.model';
import { GetOrdersSummaryBlockQuery } from './orders-summary.request';

const H = HeaderName;

@Injectable()
export class OrdersSummaryService {
    constructor(
        private readonly cmsService: CMS.Service,
        private readonly orderService: Orders.Service,
        private readonly authService: Auth.Service,
    ) {}

    getOrdersSummaryBlock(query: GetOrdersSummaryBlockQuery, headers: AppHeaders): Observable<OrdersSummaryBlock> {
        const authorization = headers[H.Authorization];
        const cms = this.cmsService.getOrdersSummaryBlock({ ...query, locale: headers[H.Locale] });

        const ordersCurrent = this.orderService.getOrderList(
            {
                ...query,
                limit: 1000,
                locale: headers[H.Locale],
                dateFrom: dayjs(query.dateFrom).toDate(),
                dateTo: dayjs(query.dateTo).toDate(),
            },
            authorization,
        );

        const ordersPrevious = this.orderService.getOrderList(
            {
                ...query,
                limit: 1000,
                locale: headers[H.Locale],
                dateFrom: dayjs(query.dateFrom).subtract(1, 'year').toDate(),
                dateTo: dayjs(query.dateTo).subtract(1, 'year').toDate(),
            },
            authorization,
        );

        const diff = Math.abs(
            dayjs(query.dateTo).diff(dayjs(query.dateFrom), query.range === 'month' ? 'month' : 'day'),
        );

        return forkJoin([cms, ordersCurrent, ordersPrevious]).pipe(
            map(([cms, ordersCurrent, ordersPrevious]) => {
                const result = mapOrdersSummary(
                    cms,
                    ordersCurrent,
                    ordersPrevious,
                    query.range,
                    diff,
                    headers[H.Locale],
                );

                // Extract permissions using ACL service
                if (authorization) {
                    const permissions = this.authService.canPerformActions(authorization, 'orders', ['view', 'create']);

                    result.permissions = {
                        view: permissions.view ?? false,
                        create: permissions.create ?? false,
                    };
                }

                return result;
            }),
        );
    }
}
