import { Injectable } from '@nestjs/common';
import { Observable, concatMap, forkJoin, map } from 'rxjs';

import { AppHeaders } from '@o2s/api-harmonization/utils/headers';

import { CMS, Tickets } from '../../models';

import { mapTicketList } from './ticket-list.mapper';
import { TicketListComponent } from './ticket-list.model';
import { GetTicketListComponentQuery } from './ticket-list.request';

@Injectable()
export class TicketListService {
    constructor(
        private readonly cmsService: CMS.Service,
        private readonly ticketService: Tickets.Service,
    ) {}

    getTicketListComponent(query: GetTicketListComponentQuery, headers: AppHeaders): Observable<TicketListComponent> {
        const cms = this.cmsService.getTicketListComponent({ ...query, locale: headers['x-locale'] });

        return forkJoin([cms]).pipe(
            concatMap(([cms]) => {
                return this.ticketService
                    .getTicketList({
                        ...query,
                        limit: query.limit || cms.pagination?.limit || 1,
                        offset: query.offset || 0,
                    })
                    .pipe(map((tickets) => mapTicketList(tickets, cms, headers['x-locale'])));
            }),
        );
    }
}
