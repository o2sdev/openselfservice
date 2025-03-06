import { Body, Controller, Get, Param, Post, Query, UseInterceptors } from '@nestjs/common';
import { LoggerService } from '@o2s/utils.logger';

import { Request } from './';
import { TicketService } from './tickets.service';

@Controller('/tickets')
@UseInterceptors(LoggerService)
export class TicketsController {
    constructor(protected readonly ticketService: TicketService) {}

    @Get(':id')
    getTicket(@Param() params: Request.GetTicketParams) {
        return this.ticketService.getTicket(params);
    }

    @Get()
    getTicketList(@Query() query: Request.GetTicketListQuery) {
        return this.ticketService.getTicketList(query);
    }

    @Post()
    createTicket(@Body() body: Request.PostTicketBody) {
        return this.ticketService.createTicket(body);
    }
}
