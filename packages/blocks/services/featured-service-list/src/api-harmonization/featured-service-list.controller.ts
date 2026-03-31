import { Controller, Get, Headers, Query, UseInterceptors } from '@nestjs/common';

import { LoggerService } from '@o2s/utils.logger';

import { AppHeaders } from '@o2s/framework/headers';
import { Auth } from '@o2s/framework/modules';

import { URL } from './';
import { GetFeaturedServiceListBlockQuery } from './featured-service-list.request';
import { FeaturedServiceListService } from './featured-service-list.service';

@Controller(URL)
@UseInterceptors(LoggerService)
export class FeaturedServiceListController {
    constructor(protected readonly service: FeaturedServiceListService) {}

    @Get()
    @Auth.Decorators.Roles({ roles: [] })
    getFeaturedServiceListBlock(@Headers() headers: AppHeaders, @Query() query: GetFeaturedServiceListBlockQuery) {
        return this.service.getFeaturedServiceListBlock(query, headers);
    }
}
