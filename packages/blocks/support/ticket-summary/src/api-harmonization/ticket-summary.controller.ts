import { Controller, Get, Headers, Query, UseInterceptors } from '@nestjs/common';

import { LoggerService } from '@o2s/utils.logger';

import { AppHeaders } from '@o2s/framework/headers';
import { Auth } from '@o2s/framework/modules';

import { URL } from './';
import { GetTicketSummaryBlockQuery } from './ticket-summary.request';
import { TicketSummaryService } from './ticket-summary.service';

@Controller(URL)
@UseInterceptors(LoggerService)
export class TicketSummaryController {
    constructor(protected readonly service: TicketSummaryService) {}

    @Get()
    @Auth.Decorators.Permissions({ resource: 'tickets', actions: ['view'] })
    getTicketSummaryBlock(@Headers() headers: AppHeaders, @Query() query: GetTicketSummaryBlockQuery) {
        return this.service.getTicketSummaryBlock(query, headers);
    }
}
