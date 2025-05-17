import { Injectable } from '@nestjs/common';
import dayjs from 'dayjs';
import { Observable, forkJoin, map } from 'rxjs';

import { AppHeaders } from '@o2s/api-harmonization/utils/headers';

import { CMS, Orders } from '../../models';

import { mapOrdersSummary } from './orders-summary.mapper';
import { OrdersSummaryBlock } from './orders-summary.model';
import { GetOrdersSummaryBlockQuery } from './orders-summary.request';

@Injectable()
export class OrdersSummaryService {
    constructor(
        private readonly cmsService: CMS.Service,
        private readonly orderService: Orders.Service,
    ) {}

    getOrdersSummaryBlock(query: GetOrdersSummaryBlockQuery, headers: AppHeaders): Observable<OrdersSummaryBlock> {
        const cms = this.cmsService.getOrdersSummaryBlock({ ...query, locale: headers['x-locale'] });

        const ordersCurrent = this.orderService.getOrderList(
            {
                ...query,
                limit: 1000,
                locale: headers['x-locale'],
                dateFrom: dayjs(query.dateFrom).toDate(),
                dateTo: dayjs(query.dateTo).toDate(),
            },
            headers['authorization'],
        );

        const ordersPrevious = this.orderService.getOrderList(
            {
                ...query,
                limit: 1000,
                locale: headers['x-locale'],
                dateFrom: dayjs(query.dateFrom).subtract(1, 'year').toDate(),
                dateTo: dayjs(query.dateTo).subtract(1, 'year').toDate(),
            },
            headers['authorization'],
        );

        const diff = Math.abs(
            dayjs(query.dateTo).diff(dayjs(query.dateFrom), query.range === 'month' ? 'month' : 'day'),
        );

        return forkJoin([cms, ordersCurrent, ordersPrevious]).pipe(
            map(([cms, ordersCurrent, ordersPrevious]) =>
                mapOrdersSummary(cms, ordersCurrent, ordersPrevious, query.range, diff, headers['x-locale']),
            ),
        );
    }
}
