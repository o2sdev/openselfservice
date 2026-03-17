import { Controller, Get, Headers, Query, UseInterceptors } from '@nestjs/common';

import { Models } from '@o2s/utils.api-harmonization';
import { LoggerService } from '@o2s/utils.logger';

import { Auth } from '@o2s/framework/modules';

import { URL } from './';
import { GetOrderConfirmationBlockQuery } from './order-confirmation.request';
import { OrderConfirmationService } from './order-confirmation.service';

@Controller(URL)
@UseInterceptors(LoggerService)
export class OrderConfirmationController {
    constructor(protected readonly service: OrderConfirmationService) {}

    @Get()
    @Auth.Decorators.Roles({ roles: [] })
    // Optional: Add permission-based access control
    // @Auth.Decorators.Permissions({ resource: 'resource-name', actions: ['view'] })
    getOrderConfirmationBlock(
        @Headers() headers: Models.Headers.AppHeaders,
        @Query() query: GetOrderConfirmationBlockQuery,
    ) {
        return this.service.getOrderConfirmationBlock(query, headers);
    }
}
