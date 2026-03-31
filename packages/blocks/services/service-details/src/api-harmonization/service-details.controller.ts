import { Controller, Get, Headers, Param, Query, UseInterceptors } from '@nestjs/common';

import { LoggerService } from '@o2s/utils.logger';

import { AppHeaders } from '@o2s/framework/headers';
import { Auth } from '@o2s/framework/modules';

import { URL } from './';
import { GetServiceDetailsBlockParams, GetServiceDetailsBlockQuery } from './service-details.request';
import { ServiceDetailsService } from './service-details.service';

@Controller(URL)
@UseInterceptors(LoggerService)
export class ServiceDetailsController {
    constructor(protected readonly service: ServiceDetailsService) {}

    @Get(':id')
    @Auth.Decorators.Permissions({ resource: 'services', actions: ['view'] })
    getServiceDetailsBlock(
        @Headers() headers: AppHeaders,
        @Query() query: GetServiceDetailsBlockQuery,
        @Param() params: GetServiceDetailsBlockParams,
    ) {
        return this.service.getServiceDetailsBlock(params, query, headers);
    }
}
