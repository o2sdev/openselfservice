import { Injectable, NotFoundException } from '@nestjs/common';
import { Observable, forkJoin, map } from 'rxjs';

import { AppHeaders } from '@o2s/api-harmonization/utils/headers';

import { CMS, Tickets } from '../../models';

import { mapTicketDetails } from './ticket-details.mapper';
import { TicketDetailsComponent } from './ticket-details.model';
import { GetTicketDetailsComponentParams, GetTicketDetailsComponentQuery } from './ticket-details.request';

@Injectable()
export class TicketDetailsService {
    constructor(
        private readonly cmsService: CMS.Service,
        private readonly ticketService: Tickets.Service,
    ) {}

    getTicketDetailsComponent(
        params: GetTicketDetailsComponentParams,
        query: GetTicketDetailsComponentQuery,
        headers: AppHeaders,
    ): Observable<TicketDetailsComponent> {
        const cms = this.cmsService.getTicketDetailsComponent({ ...query, locale: headers['x-locale'] });
        const ticket = this.ticketService.getTicket(params);

        return forkJoin([ticket, cms]).pipe(
            map(([ticket, cms]) => {
                if (!ticket) {
                    throw new NotFoundException();
                }

                return mapTicketDetails(ticket, cms, headers['x-locale']);
            }),
        );
    }
}
