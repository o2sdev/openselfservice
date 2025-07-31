import { Controller, Get, Headers, Query, UseInterceptors } from '@nestjs/common';

import { Models as ApiModels } from '@o2s/utils.api-harmonization';
import { LoggerService } from '@o2s/utils.logger';

import { Auth } from '@o2s/framework/modules';

import { URL } from './';
import { GetServiceListBlockQuery } from './service-list.request';
import { ServiceListService } from './service-list.service';

@Controller(URL)
@UseInterceptors(LoggerService)
export class ServiceListController {
    constructor(protected readonly service: ServiceListService) {}

    @Get()
    @Auth.Decorators.Roles({ roles: [Auth.Constants.Roles.ORG_USER, Auth.Constants.Roles.ORG_ADMIN] })
    getServiceListBlock(@Headers() headers: ApiModels.Headers.AppHeaders, @Query() query: GetServiceListBlockQuery) {
        return this.service.getServiceListBlock(query, headers);
    }
}
