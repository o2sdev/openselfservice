import { Controller, Get, Headers, Query, UseInterceptors } from '@nestjs/common';

import { Models as ApiModels } from '@o2s/utils.api-harmonization';
import { LoggerService } from '@o2s/utils.logger';

import { Auth } from '@o2s/framework/modules';

import { URL } from './';
import { GetOrderListBlockQuery } from './order-list.request';
import { OrderListService } from './order-list.service';

@Controller(URL)
@UseInterceptors(LoggerService)
export class OrderListController {
    constructor(protected readonly service: OrderListService) {}

    @Get()
    @Auth.Decorators.Permissions({ resource: 'orders', actions: ['view'] })
    getOrderListBlock(@Headers() headers: ApiModels.Headers.AppHeaders, @Query() query: GetOrderListBlockQuery) {
        return this.service.getOrderListBlock(query, headers);
    }
}
