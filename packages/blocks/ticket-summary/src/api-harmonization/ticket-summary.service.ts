import { Injectable } from '@nestjs/common';
import { CMS, Tickets } from '@o2s/configs.integrations';
import { Observable, forkJoin, map } from 'rxjs';

import { Models } from '@o2s/utils.api-harmonization';

import { mapTicketSummary } from './ticket-summary.mapper';
import { TicketSummaryBlock } from './ticket-summary.model';
import { GetTicketSummaryBlockQuery } from './ticket-summary.request';

@Injectable()
export class TicketSummaryService {
    constructor(
        private readonly cmsService: CMS.Service,
        private readonly ticketService: Tickets.Service,
    ) {}

    getTicketSummaryBlock(
        query: GetTicketSummaryBlockQuery,
        headers: Models.Headers.AppHeaders,
    ): Observable<TicketSummaryBlock> {
        const cms = this.cmsService.getTicketSummaryBlock({ ...query, locale: headers['x-locale'] });
        const tickets = this.ticketService.getTicketList({
            limit: 1000,
            offset: 0,
            locale: headers['x-locale'],
        });

        return forkJoin([tickets, cms]).pipe(
            map(([tickets, cms]) => mapTicketSummary(cms, tickets, headers['x-locale'])),
        );
    }
}
