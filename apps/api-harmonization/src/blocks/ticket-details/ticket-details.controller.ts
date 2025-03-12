import { Controller, Get, Headers, Param, Query, UseInterceptors } from '@nestjs/common';
import { LoggerService } from '@o2s/utils.logger';

import { AppHeaders } from '@o2s/api-harmonization/utils/headers';

import { URL } from './';
import { GetTicketDetailsBlockParams, GetTicketDetailsBlockQuery } from './ticket-details.request';
import { TicketDetailsService } from './ticket-details.service';

@Controller(URL)
@UseInterceptors(LoggerService)
export class TicketDetailsController {
    constructor(protected readonly service: TicketDetailsService) {}

    @Get(':id')
    getTicketDetailsBlock(
        @Headers() headers: AppHeaders,
        @Query() query: GetTicketDetailsBlockQuery,
        @Param() params: GetTicketDetailsBlockParams,
    ) {
        return this.service.getTicketDetailsBlock(params, query, headers);
    }
}
