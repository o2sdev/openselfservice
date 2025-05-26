import { Injectable, NotFoundException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Observable, concatMap, forkJoin, map } from 'rxjs';

import { AppHeaders } from '@o2s/api-harmonization/utils/headers';

import { CMS, Orders } from '../../models';

import { mapOrderDetails } from './order-details.mapper';
import { OrderDetailsBlock } from './order-details.model';
import { GetOrderDetailsBlockParams, GetOrderDetailsBlockQuery } from './order-details.request';

@Injectable()
export class OrderDetailsService {
    private readonly defaultProductUnit: string;

    constructor(
        private readonly cmsService: CMS.Service,
        private readonly orderService: Orders.Service,
        private readonly configService: ConfigService,
    ) {
        this.defaultProductUnit = this.configService.get('DEFAULT_PRODUCT_UNIT') || 'PCS';
    }

    getOrderDetailsBlock(
        params: GetOrderDetailsBlockParams,
        query: GetOrderDetailsBlockQuery,
        headers: AppHeaders,
    ): Observable<OrderDetailsBlock> {
        const cms = this.cmsService.getOrderDetailsBlock({ ...query, locale: headers['x-locale'] });

        return forkJoin([cms]).pipe(
            concatMap(([cms]) => {
                return this.orderService
                    .getOrder(
                        {
                            id: params.id,
                            limit: query.limit || cms.pagination?.limit || 5,
                            offset: query.offset || 0,
                            sort: query.sort || '',
                        },
                        headers['authorization'],
                    )
                    .pipe(
                        map((order) => {
                            if (!order) {
                                throw new NotFoundException();
                            }
                            return mapOrderDetails(
                                cms,
                                order,
                                headers['x-locale'],
                                headers['x-client-timezone'] || '',
                                this.defaultProductUnit,
                            );
                        }),
                    );
            }),
        );
    }
}
