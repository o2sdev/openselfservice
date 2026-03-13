import { Controller, Get, Headers, Query, UseInterceptors } from '@nestjs/common';

import { Models as ApiModels } from '@o2s/utils.api-harmonization';
import { LoggerService } from '@o2s/utils.logger';

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
    getOrdersSummaryBlock(
        @Headers() headers: ApiModels.Headers.AppHeaders,
        @Query() query: GetOrdersSummaryBlockQuery,
    ) {
        return this.service.getOrdersSummaryBlock(query, headers);
    }
}
