import { Controller, Get, Headers, Param, Query, UseInterceptors } from '@nestjs/common';

import { LoggerService } from '@o2s/utils.logger';

import { AppHeaders } from '@o2s/framework/headers';
import { Auth } from '@o2s/framework/modules';

import { URL } from './';
import { GetOrderDetailsBlockParams, GetOrderDetailsBlockQuery } from './order-details.request';
import { OrderDetailsService } from './order-details.service';

@Controller(URL)
@UseInterceptors(LoggerService)
export class OrderDetailsController {
    constructor(protected readonly service: OrderDetailsService) {}

    @Get(':id')
    @Auth.Decorators.Permissions({ resource: 'orders', actions: ['view'] })
    getOrderDetailsBlock(
        @Headers() headers: AppHeaders,
        @Query() query: GetOrderDetailsBlockQuery,
        @Param() params: GetOrderDetailsBlockParams,
    ) {
        return this.service.getOrderDetailsBlock(params, query, headers);
    }
}
