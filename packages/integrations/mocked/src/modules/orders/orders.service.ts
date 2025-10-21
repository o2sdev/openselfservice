import { Injectable, UnauthorizedException } from '@nestjs/common';
import { Observable, of } from 'rxjs';

import { Auth, Orders } from '@o2s/framework/modules';

import { mapOrder, mapOrders } from './orders.mapper';
import { responseDelay } from '@/utils/delay';

@Injectable()
export class OrdersService implements Orders.Service {
    constructor(private readonly authService: Auth.Service) {}

    getOrderList(
        query: Orders.Request.GetOrderListQuery,
        authorization: string | undefined,
    ): Observable<Orders.Model.Orders> {
        if (!authorization) {
            throw new UnauthorizedException('Unauthorized');
        }

        const customerId = this.authService.getCustomerId(authorization);

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
