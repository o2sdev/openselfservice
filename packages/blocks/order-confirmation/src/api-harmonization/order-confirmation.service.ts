import { Injectable, NotFoundException } from '@nestjs/common';
import { CMS, Orders } from '@o2s/configs.integrations';
import { Observable, forkJoin, map, throwError } from 'rxjs';

import { Models } from '@o2s/utils.api-harmonization';

// import { Auth } from '@o2s/framework/modules';

import { mapOrderConfirmation } from './order-confirmation.mapper';
import { OrderConfirmationBlock } from './order-confirmation.model';
import { GetOrderConfirmationBlockQuery } from './order-confirmation.request';

@Injectable()
export class OrderConfirmationService {
    constructor(
        private readonly cmsService: CMS.Service,
        private readonly ordersService: Orders.Service,
        // Optional: Inject Auth.Service when you need to add permission flags to the response
        // private readonly authService: Auth.Service,
    ) {}

    getOrderConfirmationBlock(
        query: GetOrderConfirmationBlockQuery,
        headers: Models.Headers.AppHeaders,
    ): Observable<OrderConfirmationBlock> {
        if (!query.orderId) {
            return throwError(() => new NotFoundException('Order ID is required'));
        }

        return forkJoin([
            this.cmsService.getOrderConfirmationBlock({ ...query, locale: headers['x-locale'] }),
            this.ordersService.getOrder({ id: query.orderId }, headers.authorization),
        ]).pipe(
            map(([cms, order]) => {
                if (!order) {
                    throw new NotFoundException(`Order with ID ${query.orderId} not found`);
                }

                return mapOrderConfirmation(cms, order, headers['x-locale']);
            }),
        );
    }
}
