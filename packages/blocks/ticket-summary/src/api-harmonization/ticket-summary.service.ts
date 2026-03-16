import { Injectable } from '@nestjs/common';
import { CMS, Tickets } from '@o2s/configs.integrations';
import { Observable, forkJoin, map } from 'rxjs';

import { AppHeaders, HeaderName } from '@o2s/framework/headers';
import { Auth } from '@o2s/framework/modules';

import { mapTicketSummary } from './ticket-summary.mapper';
import { TicketSummaryBlock } from './ticket-summary.model';
import { GetTicketSummaryBlockQuery } from './ticket-summary.request';

const H = HeaderName;

@Injectable()
export class TicketSummaryService {
    constructor(
        private readonly cmsService: CMS.Service,
        private readonly ticketService: Tickets.Service,
        private readonly authService: Auth.Service,
    ) {}

    getTicketSummaryBlock(query: GetTicketSummaryBlockQuery, headers: AppHeaders): Observable<TicketSummaryBlock> {
        const cms = this.cmsService.getTicketSummaryBlock({ ...query, locale: headers[H.Locale] });
        const tickets = this.ticketService.getTicketList({
            limit: 1000,
            offset: 0,
            locale: headers[H.Locale],
        });

        return forkJoin([tickets, cms]).pipe(
            map(([tickets, cms]) => {
                const result = mapTicketSummary(cms, tickets, headers[H.Locale]);

                // Extract permissions using ACL service
                if (headers[H.Authorization]) {
                    const permissions = this.authService.canPerformActions(headers[H.Authorization], 'tickets', [
                        'view',
                        'create',
                    ]);

                    result.permissions = {
                        view: permissions.view ?? false,
                        create: permissions.create ?? false,
                    };
                }

                return result;
            }),
        );
    }
}
