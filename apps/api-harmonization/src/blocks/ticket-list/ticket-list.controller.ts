import { Controller, Get, Headers, Query, UseInterceptors } from '@nestjs/common';
import { LoggerService } from '@o2s/utils.logger';

import { Auth } from '@o2s/framework/modules';

import { AppHeaders } from '@o2s/api-harmonization/utils/headers';

import { URL } from './';
import { GetTicketListBlockQuery } from './ticket-list.request';
import { TicketListService } from './ticket-list.service';

@Controller(URL)
@UseInterceptors(LoggerService)
export class TicketListController {
    constructor(protected readonly service: TicketListService) {}

    @Get()
    @Auth.Decorators.Roles({ roles: [Auth.Constants.Roles.ORG_USER, Auth.Constants.Roles.ORG_ADMIN] })
    getTicketListBlock(@Headers() headers: AppHeaders, @Query() query: GetTicketListBlockQuery) {
        return this.service.getTicketListBlock(query, headers);
    }
}
