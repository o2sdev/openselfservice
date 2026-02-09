import { Controller, Get, Headers, Query, UseInterceptors } from '@nestjs/common';

import { Models } from '@o2s/utils.api-harmonization';
import { LoggerService } from '@o2s/utils.logger';

import { Auth } from '@o2s/framework/modules';

import { URL } from './';
import { GetKpisBlockQuery } from './kpis.request';
import { KpisService } from './kpis.service';

@Controller(URL)
@UseInterceptors(LoggerService)
export class KpisController {
    constructor(protected readonly service: KpisService) {}

    @Get()
    @Auth.Decorators.Roles({ roles: [] })
    // Optional: Add permission-based access control
    // @Auth.Decorators.Permissions({ resource: 'resource-name', actions: ['view'] })
    getKpisBlock(@Headers() headers: Models.Headers.AppHeaders, @Query() query: GetKpisBlockQuery) {
        return this.service.getKpisBlock(query, headers);
    }
}
