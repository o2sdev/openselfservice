import { Controller, Get, Headers, Query, UseInterceptors } from '@nestjs/common';
import { LoggerService } from '@o2s/utils.logger';

import { Auth } from '@o2s/framework/modules';

import { AppHeaders } from '@o2s/api-harmonization/utils/headers';

import { URL } from './';
import { GetTicketRecentBlockQuery } from './ticket-recent.request';
import { TicketRecentService } from './ticket-recent.service';

@Controller(URL)
@UseInterceptors(LoggerService)
export class TicketRecentController {
    constructor(protected readonly service: TicketRecentService) {}

    @Get()
    @Auth.Decorators.Roles({ roles: [Auth.Constants.Roles.USER, Auth.Constants.Roles.ADMIN] })
    getTicketRecentBlock(@Headers() headers: AppHeaders, @Query() query: GetTicketRecentBlockQuery) {
        return this.service.getTicketRecentBlock(query, headers);
    }
}
