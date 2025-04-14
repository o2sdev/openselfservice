import { Injectable, NotFoundException } from '@nestjs/common';
import { Observable, forkJoin, map } from 'rxjs';

import { AppHeaders } from '@o2s/api-harmonization/utils/headers';

import { CMS, Tickets } from '../../models';

import { mapTicketDetails } from './ticket-details.mapper';
import { TicketDetailsBlock } from './ticket-details.model';
import { GetTicketDetailsBlockParams, GetTicketDetailsBlockQuery } from './ticket-details.request';

@Injectable()
export class TicketDetailsService {
    constructor(
        private readonly cmsService: CMS.Service,
        private readonly ticketService: Tickets.Service,
    ) {}

    getTicketDetailsBlock(
        params: GetTicketDetailsBlockParams,
        query: GetTicketDetailsBlockQuery,
        headers: AppHeaders,
    ): Observable<TicketDetailsBlock> {
        const cms = this.cmsService.getTicketDetailsBlock({ ...query, locale: headers['x-locale'] });
        const ticket = this.ticketService.getTicket({ ...params, locale: headers['x-locale'] });

        return forkJoin([ticket, cms]).pipe(
            map(([ticket, cms]) => {
                if (!ticket) {
                    throw new NotFoundException();
                }

                return mapTicketDetails(ticket, cms, headers['x-locale'], headers['x-client-timezone'] || '');
            }),
        );
    }
}
