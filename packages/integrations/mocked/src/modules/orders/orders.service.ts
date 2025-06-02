import { Injectable, UnauthorizedException } from '@nestjs/common';
import { Observable, of } from 'rxjs';

import { Auth, Orders } from '@o2s/framework/modules';

import { responseDelay } from '@/utils/delay';

import { mapOrder, mapOrders } from './orders.mapper';

@Injectable()
export class OrdersService implements Orders.Service {
    getOrderList(
        query: Orders.Request.GetOrderListQuery,
        authorization: string | undefined,
    ): Observable<Orders.Model.Orders> {
        if (!authorization) {
            throw new UnauthorizedException('Unauthorized');
        }

        const customerId = Auth.Utils.decodeAuthorizationToken(authorization)?.customer?.id;

        if (!customerId) {
            throw new UnauthorizedException('Unauthorized');
        }

        return of(mapOrders(query, customerId)).pipe(responseDelay());
    }

    getOrder(
        params: Orders.Request.GetOrderParams,
        authorization: string | undefined,
    ): Observable<Orders.Model.Order | undefined> {
        if (!authorization) {
            throw new UnauthorizedException('Unauthorized');
        }

        return of(mapOrder(params)).pipe(responseDelay());
    }
}
