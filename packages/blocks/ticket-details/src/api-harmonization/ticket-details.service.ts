import { Injectable, NotFoundException } from '@nestjs/common';
import { CMS, Tickets } from '@o2s/configs.integrations';
import { Observable, forkJoin, map } from 'rxjs';

import { Models } from '@o2s/utils.api-harmonization';

import { Auth } from '@o2s/framework/modules';

import { mapTicketDetails } from './ticket-details.mapper';
import { TicketDetailsBlock } from './ticket-details.model';
import { GetTicketDetailsBlockParams, GetTicketDetailsBlockQuery } from './ticket-details.request';

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
        headers: Models.Headers.AppHeaders,
    ): Observable<TicketDetailsBlock> {
        const cms = this.cmsService.getTicketDetailsBlock({ ...query, locale: headers['x-locale'] });
        const ticket = this.ticketService.getTicket({ ...params, locale: headers['x-locale'] });

        return forkJoin([ticket, cms]).pipe(
            map(([ticket, cms]) => {
                if (!ticket) {
                    throw new NotFoundException();
                }

                const result = mapTicketDetails(ticket, cms, headers['x-locale'], headers['x-client-timezone'] || '');

                // Extract permissions using ACL service
                if (headers.authorization) {
                    const permissions = this.authService.canPerformActions(headers.authorization, 'tickets', [
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
                } else {
                    // Default to allowing view if no authorization token
                    result.permissions = {
                        view: true,
                        edit: false,
                        close: false,
                        reopen: false,
                    };
                }

                return result;
            }),
        );
    }
}
