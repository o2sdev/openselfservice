import { Controller, Get, Headers, Query, UseInterceptors } from '@nestjs/common';

import { LoggerService } from '@o2s/utils.logger';

import { AppHeaders } from '@o2s/framework/headers';
import { Auth } from '@o2s/framework/modules';

import { URL } from './ticket-list.client';
import { GetTicketListBlockQuery } from './ticket-list.request';
import { TicketListService } from './ticket-list.service';

@Controller(URL)
@UseInterceptors(LoggerService)
export class TicketListController {
    constructor(protected readonly service: TicketListService) {}

    @Get()
    @Auth.Decorators.Permissions({ resource: 'tickets', actions: ['view'] })
    getTicketListBlock(@Headers() headers: AppHeaders, @Query() query: GetTicketListBlockQuery) {
        return this.service.getTicketListBlock(query, headers);
    }
}
