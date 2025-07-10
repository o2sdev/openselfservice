import { Controller, Get, Headers, Query, UseInterceptors } from '@nestjs/common';

import { Models } from '@o2s/utils.api-harmonization';
import { LoggerService } from '@o2s/utils.logger';

import { Auth } from '@o2s/framework/modules';

import { URL } from './ticket-list.client';
import { GetTicketListBlockQuery } from './ticket-list.request';
import { TicketListService } from './ticket-list.service';

@Controller(URL)
@UseInterceptors(LoggerService)
export class TicketListController {
    constructor(protected readonly service: TicketListService) {}

    @Get()
    @Auth.Decorators.Roles({ roles: [Auth.Constants.Roles.USER, Auth.Constants.Roles.ADMIN] })
    getTicketListBlock(@Headers() headers: Models.Headers.AppHeaders, @Query() query: GetTicketListBlockQuery) {
        return this.service.getTicketListBlock(query, headers);
    }
}
