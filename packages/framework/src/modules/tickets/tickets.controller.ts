import { Body, Controller, Get, Headers, Param, Post, Query, UseInterceptors } from '@nestjs/common';

import { LoggerService } from '@o2s/utils.logger';

import { Request } from './';
import { TicketService } from './tickets.service';
import { AppHeaders } from '@/utils/models/headers';

/**
 * HTTP controller for tickets. Base path: `/tickets`. All methods delegate to {@link TicketService}.
 */
@Controller('/tickets')
@UseInterceptors(LoggerService)
export class TicketsController {
    constructor(protected readonly ticketService: TicketService) {}

    @Get(':id')
    getTicket(
        @Param() params: Request.GetTicketParams,
        @Headers() headers: AppHeaders,
    ): ReturnType<TicketService['getTicket']> {
        return this.ticketService.getTicket(params, headers.authorization);
    }

    @Get()
    getTicketList(
        @Query() query: Request.GetTicketListQuery,
        @Headers() headers: AppHeaders,
    ): ReturnType<TicketService['getTicketList']> {
        return this.ticketService.getTicketList(query, headers.authorization);
    }

    @Post()
    createTicket(
        @Body() body: Request.PostTicketBody,
        @Headers() headers: AppHeaders,
    ): ReturnType<TicketService['createTicket']> {
        return this.ticketService.createTicket(body, headers.authorization);
    }
}
