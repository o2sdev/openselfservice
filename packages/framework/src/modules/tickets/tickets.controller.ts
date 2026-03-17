import { Body, Controller, Get, Headers, Param, Post, Query, UseInterceptors } from '@nestjs/common';

import { LoggerService } from '@o2s/utils.logger';

import { Request } from './';
import { TicketService } from './tickets.service';
import { AppHeaders, HeaderName } from '@/utils/models/headers';

const H = HeaderName;

@Controller('/tickets')
@UseInterceptors(LoggerService)
export class TicketsController {
    constructor(protected readonly ticketService: TicketService) {}

    @Get(':id')
    getTicket(@Param() params: Request.GetTicketParams, @Headers() headers: AppHeaders) {
        return this.ticketService.getTicket(params, headers[H.Authorization]);
    }

    @Get()
    getTicketList(@Query() query: Request.GetTicketListQuery, @Headers() headers: AppHeaders) {
        return this.ticketService.getTicketList(query, headers[H.Authorization]);
    }

    @Post()
    createTicket(@Body() body: Request.PostTicketBody, @Headers() headers: AppHeaders) {
        return this.ticketService.createTicket(body, headers[H.Authorization]);
    }
}
