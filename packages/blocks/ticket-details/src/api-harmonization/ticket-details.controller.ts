import { Controller, Get, Headers, Param, Query, UseInterceptors } from '@nestjs/common';

import { Models } from '@o2s/utils.api-harmonization';
import { LoggerService } from '@o2s/utils.logger';

import { Auth } from '@o2s/framework/modules';

import { URL } from './';
import { GetTicketDetailsBlockParams, GetTicketDetailsBlockQuery } from './ticket-details.request';
import { TicketDetailsService } from './ticket-details.service';

@Controller(URL)
@UseInterceptors(LoggerService)
export class TicketDetailsController {
    constructor(protected readonly service: TicketDetailsService) {}

    @Get(':id')
    @Auth.Decorators.Roles({ roles: [Auth.Constants.Roles.ORG_USER, Auth.Constants.Roles.ORG_ADMIN] })
    getTicketDetailsBlock(
        @Headers() headers: Models.Headers.AppHeaders,
        @Query() query: GetTicketDetailsBlockQuery,
        @Param() params: GetTicketDetailsBlockParams,
    ) {
        return this.service.getTicketDetailsBlock(params, query, headers);
    }
}
