import { Controller, Get, Headers, Query, UseInterceptors } from '@nestjs/common';
import { LoggerService } from '@o2s/utils.logger';

import { Auth } from '@o2s/framework/modules';

import { AppHeaders } from '@o2s/api-harmonization/utils/headers';

import { URL } from './';
import { GetTicketListComponentQuery } from './ticket-list.request';
import { TicketListService } from './ticket-list.service';

@Controller(URL)
@UseInterceptors(LoggerService)
export class TicketListController {
    constructor(protected readonly service: TicketListService) {}

    @Get()
    @Auth.Decorators.Roles({ roles: [Auth.Constants.Roles.USER, Auth.Constants.Roles.ADMIN] })
    getTicketListComponent(@Headers() headers: AppHeaders, @Query() query: GetTicketListComponentQuery) {
        return this.service.getTicketListComponent(query, headers);
    }
}
