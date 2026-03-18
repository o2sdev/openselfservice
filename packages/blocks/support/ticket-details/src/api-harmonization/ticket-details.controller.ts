import { Controller, Get, Headers, Param, Query, UseInterceptors } from '@nestjs/common';

import { LoggerService } from '@o2s/utils.logger';

import { AppHeaders } from '@o2s/framework/headers';
import { Auth } from '@o2s/framework/modules';

import { URL } from './';
import { GetTicketDetailsBlockParams, GetTicketDetailsBlockQuery } from './ticket-details.request';
import { TicketDetailsService } from './ticket-details.service';

@Controller(URL)
@UseInterceptors(LoggerService)
export class TicketDetailsController {
    constructor(protected readonly service: TicketDetailsService) {}

    @Get(':id')
    @Auth.Decorators.Permissions({ resource: 'tickets', actions: ['view'] })
    getTicketDetailsBlock(
        @Headers() headers: AppHeaders,
        @Query() query: GetTicketDetailsBlockQuery,
        @Param() params: GetTicketDetailsBlockParams,
    ) {
        return this.service.getTicketDetailsBlock(params, query, headers);
    }
}
