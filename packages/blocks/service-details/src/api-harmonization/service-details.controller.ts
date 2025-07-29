import { Controller, Get, Headers, Param, Query, UseInterceptors } from '@nestjs/common';

import { Models as ApiModels } from '@o2s/utils.api-harmonization';
import { LoggerService } from '@o2s/utils.logger';

import { Auth } from '@o2s/framework/modules';

import { URL } from './';
import { GetServiceDetailsBlockParams, GetServiceDetailsBlockQuery } from './service-details.request';
import { ServiceDetailsService } from './service-details.service';

@Controller(URL)
@UseInterceptors(LoggerService)
export class ServiceDetailsController {
    constructor(protected readonly service: ServiceDetailsService) {}

    @Get(':id')
    @Auth.Decorators.Roles({ roles: [Auth.Constants.Roles.ORG_USER, Auth.Constants.Roles.ORG_ADMIN] })
    getServiceDetailsBlock(
        @Headers() headers: ApiModels.Headers.AppHeaders,
        @Query() query: GetServiceDetailsBlockQuery,
        @Param() params: GetServiceDetailsBlockParams,
    ) {
        return this.service.getServiceDetailsBlock(params, query, headers);
    }
}
