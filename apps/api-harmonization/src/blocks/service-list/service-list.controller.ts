import { Controller, Get, Headers, Query, UseInterceptors } from '@nestjs/common';
import { LoggerService } from '@o2s/utils.logger';

import { AppHeaders } from '@o2s/api-harmonization/utils/headers';

import { URL } from './';
import { GetServiceListBlockQuery } from './service-list.request';
import { ServiceListService } from './service-list.service';

@Controller(URL)
@UseInterceptors(LoggerService)
export class ServiceListController {
    constructor(protected readonly service: ServiceListService) {}

    @Get()
    getServiceListBlock(@Headers() headers: AppHeaders, @Query() query: GetServiceListBlockQuery) {
        return this.service.getServiceListBlock(query, headers);
    }
}
