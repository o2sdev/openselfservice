import { Injectable } from '@nestjs/common';
import { CMS, Tickets } from '@o2s/configs.integrations';
import { Observable, concatMap, forkJoin, map } from 'rxjs';

import { Models } from '@o2s/utils.api-harmonization';

import { mapTicketRecent } from './ticket-recent.mapper';
import { TicketRecentBlock } from './ticket-recent.model';
import { GetTicketRecentBlockQuery } from './ticket-recent.request';

@Injectable()
export class TicketRecentService {
    constructor(
        private readonly cmsService: CMS.Service,
        private readonly ticketsService: Tickets.Service,
    ) {}

    getTicketRecentBlock(
        query: GetTicketRecentBlockQuery,
        headers: Models.Headers.AppHeaders,
    ): Observable<TicketRecentBlock> {
        const cms = this.cmsService.getTicketRecentBlock({ ...query, locale: headers['x-locale'] });

        return forkJoin([cms]).pipe(
            concatMap(([cms]) => {
                return this.ticketsService
                    .getTicketList({ ...query, limit: cms.limit, locale: headers['x-locale'] })
                    .pipe(
                        map((tickets) =>
                            mapTicketRecent(cms, tickets, headers['x-locale'], headers['x-client-timezone'] || ''),
                        ),
                    );
            }),
        );
    }
}
