import { Controller, Get, Headers, Param, Query, UseInterceptors } from '@nestjs/common';
import { LoggerService } from '@o2s/utils.logger';

import { Auth } from '@o2s/framework/modules';

import { AppHeaders } from '@o2s/api-harmonization/utils/headers';

import { URL } from './';
import { GetOrderDetailsBlockParams, GetOrderDetailsBlockQuery } from './order-details.request';
import { OrderDetailsService } from './order-details.service';

@Controller(URL)
@UseInterceptors(LoggerService)
export class OrderDetailsController {
    constructor(protected readonly service: OrderDetailsService) {}

    @Get(':id')
    @Auth.Decorators.Roles({ roles: [Auth.Constants.Roles.USER, Auth.Constants.Roles.ADMIN] })
    getOrderDetailsBlock(
        @Headers() headers: AppHeaders,
        @Query() query: GetOrderDetailsBlockQuery,
        @Param() params: GetOrderDetailsBlockParams,
    ) {
        return this.service.getOrderDetailsBlock(params, query, headers);
    }
}
