import { Controller, Get, Headers, Query, UseInterceptors } from '@nestjs/common';

import { Models } from '@o2s/utils.api-harmonization';
import { LoggerService } from '@o2s/utils.logger';

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
    getTicketSummaryBlock(@Headers() headers: Models.Headers.AppHeaders, @Query() query: GetTicketSummaryBlockQuery) {
        return this.service.getTicketSummaryBlock(query, headers);
    }
}
