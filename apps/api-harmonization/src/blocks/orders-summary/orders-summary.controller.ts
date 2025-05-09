import { Controller, Get, Headers, Query, UseInterceptors } from '@nestjs/common';
import { LoggerService } from '@o2s/utils.logger';

import { Auth } from '@o2s/framework/modules';

import { AppHeaders } from '@o2s/api-harmonization/utils/headers';

import { URL } from './';
import { GetOrdersSummaryBlockQuery } from './orders-summary.request';
import { OrdersSummaryService } from './orders-summary.service';

@Controller(URL)
@UseInterceptors(LoggerService)
export class OrdersSummaryController {
    constructor(protected readonly service: OrdersSummaryService) {}

    @Get()
    @Auth.Decorators.Roles({ roles: [Auth.Constants.Roles.USER, Auth.Constants.Roles.ADMIN] })
    getOrdersSummaryBlock(@Headers() headers: AppHeaders, @Query() query: GetOrdersSummaryBlockQuery) {
        return this.service.getOrdersSummaryBlock(query, headers);
    }
}
