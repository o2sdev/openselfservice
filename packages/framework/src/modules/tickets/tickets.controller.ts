import { Body, Controller, Get, Headers, Param, Post, Query, UseInterceptors } from '@nestjs/common';
import { ApiBody, ApiCreatedResponse, ApiOkResponse, ApiOperation, ApiParam, ApiQuery, ApiTags } from '@nestjs/swagger';

import { LoggerService } from '@o2s/utils.logger';

import { Request } from './';
import { PaginatedTickets, Ticket } from './tickets.model';
import { TicketService } from './tickets.service';
import { AppHeaders, HeaderName } from '@/utils/models/headers';

const H = HeaderName;

/**
 * HTTP controller for tickets. Base path: `/tickets`. All methods delegate to {@link TicketService}.
 */
@Controller('/tickets')
@UseInterceptors(LoggerService)
@ApiTags('tickets')
export class TicketsController {
    constructor(protected readonly ticketService: TicketService) {}

    @Get(':id')
    @ApiOperation({ summary: 'Get ticket by id' })
    @ApiParam({ name: 'id', type: String, description: 'Ticket identifier.' })
    @ApiOkResponse({ description: 'Returns ticket details.', type: Ticket })
    getTicket(
        @Param() params: Request.GetTicketParams,
        @Headers() headers: AppHeaders,
    ): ReturnType<TicketService['getTicket']> {
        return this.ticketService.getTicket(params, headers[H.Authorization]);
    }

    @Get()
    @ApiOperation({ summary: 'List tickets' })
    @ApiQuery({
        name: 'query',
        required: false,
        type: String,
        description: 'Ticket list filters and pagination query.',
    })
    @ApiOkResponse({ description: 'Returns ticket list.', type: PaginatedTickets })
    getTicketList(
        @Query() query: Request.GetTicketListQuery,
        @Headers() headers: AppHeaders,
    ): ReturnType<TicketService['getTicketList']> {
        return this.ticketService.getTicketList(query, headers[H.Authorization]);
    }

    @Post()
    @ApiOperation({ summary: 'Create ticket' })
    @ApiBody({ type: Request.PostTicketBody, description: 'Ticket creation payload.' })
    @ApiCreatedResponse({ description: 'Ticket created.', type: Ticket })
    createTicket(
        @Body() body: Request.PostTicketBody,
        @Headers() headers: AppHeaders,
    ): ReturnType<TicketService['createTicket']> {
        return this.ticketService.createTicket(body, headers[H.Authorization]);
    }
}
