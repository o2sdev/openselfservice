import { Injectable, NotFoundException } from '@nestjs/common';
import { CMS, Tickets } from '@o2s/configs.integrations';
import { Observable, forkJoin, map } from 'rxjs';

import { AppHeaders, HeaderName } from '@o2s/framework/headers';
import { Auth } from '@o2s/framework/modules';

import { mapTicketDetails } from './ticket-details.mapper';
import { TicketDetailsBlock } from './ticket-details.model';
import { GetTicketDetailsBlockParams, GetTicketDetailsBlockQuery } from './ticket-details.request';

const H = HeaderName;

@Injectable()
export class TicketDetailsService {
    constructor(
        private readonly cmsService: CMS.Service,
        private readonly ticketService: Tickets.Service,
        private readonly authService: Auth.Service,
    ) {}

    getTicketDetailsBlock(
        params: GetTicketDetailsBlockParams,
        query: GetTicketDetailsBlockQuery,
        headers: AppHeaders,
    ): Observable<TicketDetailsBlock> {
        const cms = this.cmsService.getTicketDetailsBlock({ ...query, locale: headers[H.Locale] });
        const ticket = this.ticketService.getTicket({ ...params, locale: headers[H.Locale] });

        return forkJoin([ticket, cms]).pipe(
            map(([ticket, cms]) => {
                if (!ticket) {
                    throw new NotFoundException();
                }

                const result = mapTicketDetails(ticket, cms, headers[H.Locale], headers[H.ClientTimezone] || '');

                // Extract permissions using ACL service
                const authorization = headers[H.Authorization];
                if (authorization) {
                    const permissions = this.authService.canPerformActions(authorization, 'tickets', [
                        'view',
                        'edit',
                        'close',
                        'reopen',
                    ]);

                    result.permissions = {
                        view: permissions.view ?? false,
                        edit: permissions.edit ?? false,
                        close: permissions.close ?? false,
                        reopen: permissions.reopen ?? false,
                    };
                }

                return result;
            }),
        );
    }
}
