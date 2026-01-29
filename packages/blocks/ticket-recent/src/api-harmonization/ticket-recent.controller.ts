import { Controller, Get, Headers, Query, UseInterceptors } from '@nestjs/common';

import { Models } from '@o2s/utils.api-harmonization';
import { LoggerService } from '@o2s/utils.logger';

import { Auth } from '@o2s/framework/modules';

import { URL } from './';
import { GetTicketRecentBlockQuery } from './ticket-recent.request';
import { TicketRecentService } from './ticket-recent.service';

@Controller(URL)
@UseInterceptors(LoggerService)
export class TicketRecentController {
    constructor(protected readonly service: TicketRecentService) {}

    @Get()
    @Auth.Decorators.Permissions({ resource: 'tickets', actions: ['view'] })
    getTicketRecentBlock(@Headers() headers: Models.Headers.AppHeaders, @Query() query: GetTicketRecentBlockQuery) {
        return this.service.getTicketRecentBlock(query, headers);
    }
}
