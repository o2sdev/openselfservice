import { Controller, Get, Headers, Param, Query, UseInterceptors } from '@nestjs/common';
import { LoggerService } from '@o2s/utils.logger';

import { Auth } from '@o2s/framework/modules';

import { AppHeaders } from '@o2s/api-harmonization/utils/headers';

import { URL } from './';
import { GetServiceDetailsBlockParams, GetServiceDetailsBlockQuery } from './service-details.request';
import { ServiceDetailsService } from './service-details.service';

@Controller(URL)
@UseInterceptors(LoggerService)
export class ServiceDetailsController {
    constructor(protected readonly service: ServiceDetailsService) {}

    @Get(':id')
    @Auth.Decorators.Roles({ roles: [Auth.Constants.Roles.USER, Auth.Constants.Roles.ADMIN] })
    getServiceDetailsBlock(
        @Headers() headers: AppHeaders,
        @Query() query: GetServiceDetailsBlockQuery,
        @Param() params: GetServiceDetailsBlockParams,
    ) {
        return this.service.getServiceDetailsBlock(params, query, headers);
    }
}
