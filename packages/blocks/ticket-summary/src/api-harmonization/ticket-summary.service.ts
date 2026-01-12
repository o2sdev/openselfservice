import { Injectable } from '@nestjs/common';
import { CMS, Tickets } from '@o2s/configs.integrations';
import { Observable, forkJoin, map } from 'rxjs';

import { Models } from '@o2s/utils.api-harmonization';

import { Auth } from '@o2s/framework/modules';

import { mapTicketSummary } from './ticket-summary.mapper';
import { TicketSummaryBlock } from './ticket-summary.model';
import { GetTicketSummaryBlockQuery } from './ticket-summary.request';

@Injectable()
export class TicketSummaryService {
    constructor(
        private readonly cmsService: CMS.Service,
        private readonly ticketService: Tickets.Service,
        private readonly permissionsService: Auth.Permissions.Service,
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
            map(([tickets, cms]) => {
                const result = mapTicketSummary(cms, tickets, headers['x-locale']);

                // Extract permissions using ACL service
                if (headers.authorization) {
                    const permissions = this.permissionsService.checkResourceActions(headers.authorization, 'tickets', [
                        'view',
                        'create',
                    ]);

                    result.permissions = {
                        view: permissions.view ?? false,
                        create: permissions.create ?? false,
                    };
                } else {
                    // Default to allowing view if no authorization token
                    result.permissions = {
                        view: true,
                        create: false,
                    };
                }

                return result;
            }),
        );
    }
}
