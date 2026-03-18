import { Controller, Get, Headers, Query, UseInterceptors } from '@nestjs/common';

import { LoggerService } from '@o2s/utils.logger';

import { AppHeaders } from '@o2s/framework/headers';
import { Auth } from '@o2s/framework/modules';

import { URL } from './';
import { GetOrdersSummaryBlockQuery } from './orders-summary.request';
import { OrdersSummaryService } from './orders-summary.service';

@Controller(URL)
@UseInterceptors(LoggerService)
export class OrdersSummaryController {
    constructor(protected readonly service: OrdersSummaryService) {}

    @Get()
    @Auth.Decorators.Permissions({ resource: 'orders', actions: ['view'] })
    getOrdersSummaryBlock(@Headers() headers: AppHeaders, @Query() query: GetOrdersSummaryBlockQuery) {
        return this.service.getOrdersSummaryBlock(query, headers);
    }
}
