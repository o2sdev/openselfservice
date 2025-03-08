import { Injectable } from '@nestjs/common';
import { Observable, concatMap, forkJoin, map } from 'rxjs';

import { AppHeaders } from '@o2s/api-harmonization/utils/headers';

import { CMS, Tickets } from '../../models';

import { mapTicketRecent } from './ticket-recent.mapper';
import { TicketRecentComponent } from './ticket-recent.model';
import { GetTicketRecentComponentQuery } from './ticket-recent.request';

@Injectable()
export class TicketRecentService {
    constructor(
        private readonly cmsService: CMS.Service,
        private readonly ticketsService: Tickets.Service,
    ) {}

    getTicketRecentComponent(
        query: GetTicketRecentComponentQuery,
        headers: AppHeaders,
    ): Observable<TicketRecentComponent> {
        const cms = this.cmsService.getTicketRecentComponent({ ...query, locale: headers['x-locale'] });

        return forkJoin([cms]).pipe(
            concatMap(([cms]) => {
                return this.ticketsService
                    .getTicketList({ ...query, limit: cms.limit, locale: headers['x-locale'] })
                    .pipe(map((tickets) => mapTicketRecent(cms, tickets, headers['x-locale'])));
            }),
        );
    }
}
