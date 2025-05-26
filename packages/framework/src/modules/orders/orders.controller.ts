import { Controller, Get, Headers, Param, Query, UseInterceptors } from '@nestjs/common';
import { LoggerService } from '@o2s/utils.logger';

import { AppHeaders } from '@/utils/models/headers';

import { Request } from './';
import { OrderService } from './orders.service';

@Controller('/orders')
@UseInterceptors(LoggerService)
export class OrdersController {
    constructor(private readonly orderService: OrderService) {}

    @Get(':id')
    getOrder(@Param() params: Request.GetOrderParams, @Headers() headers: AppHeaders) {
        return this.orderService.getOrder(params, headers.authorization);
    }

    @Get()
    getOrderList(@Query() query: Request.GetOrderListQuery, @Headers() headers: AppHeaders) {
        return this.orderService.getOrderList(query, headers.authorization);
    }
}
