import { Controller, Get, Headers, Query, UseInterceptors } from '@nestjs/common';
import { LoggerService } from '@o2s/utils.logger';

import { Auth } from '@o2s/framework/modules';

import { AppHeaders } from '@o2s/api-harmonization/utils/headers';

import { URL } from './';
import { GetOrderListBlockQuery } from './order-list.request';
import { OrderListService } from './order-list.service';

@Controller(URL)
@UseInterceptors(LoggerService)
export class OrderListController {
    constructor(protected readonly service: OrderListService) {}

    @Get()
    @Auth.Decorators.Roles({ roles: [Auth.Constants.Roles.USER, Auth.Constants.Roles.ADMIN] })
    getOrderListBlock(@Headers() headers: AppHeaders, @Query() query: GetOrderListBlockQuery) {
        return this.service.getOrderListBlock(query, headers);
    }
}
