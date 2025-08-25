import { Controller, Get, Headers, Param, Query, UseInterceptors } from '@nestjs/common';

import { Models as ApiModels } from '@o2s/utils.api-harmonization';
import { LoggerService } from '@o2s/utils.logger';

import { Auth } from '@o2s/framework/modules';

import { URL } from './';
import { GetOrderDetailsBlockParams, GetOrderDetailsBlockQuery } from './order-details.request';
import { OrderDetailsService } from './order-details.service';

@Controller(URL)
@UseInterceptors(LoggerService)
export class OrderDetailsController {
    constructor(protected readonly service: OrderDetailsService) {}

    @Get(':id')
    @Auth.Decorators.Roles({ roles: [Auth.Constants.Roles.ORG_USER, Auth.Constants.Roles.ORG_ADMIN] })
    getOrderDetailsBlock(
        @Headers() headers: ApiModels.Headers.AppHeaders,
        @Query() query: GetOrderDetailsBlockQuery,
        @Param() params: GetOrderDetailsBlockParams,
    ) {
        return this.service.getOrderDetailsBlock(params, query, headers);
    }
}
