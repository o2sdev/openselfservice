import { Injectable } from '@nestjs/common';
import { CMS, Tickets } from '@o2s/configs.integrations';
import { Observable, concatMap, forkJoin, map } from 'rxjs';

import { Models } from '@o2s/utils.api-harmonization';

import { Auth } from '@o2s/framework/modules';

import { mapTicketList } from './ticket-list.mapper';
import { TicketListBlock } from './ticket-list.model';
import { GetTicketListBlockQuery } from './ticket-list.request';

@Injectable()
export class TicketListService {
    constructor(
        private readonly cmsService: CMS.Service,
        private readonly ticketService: Tickets.Service,
        private readonly authService: Auth.Service,
    ) {}

    getTicketListBlock(
        query: GetTicketListBlockQuery,
        headers: Models.Headers.AppHeaders,
    ): Observable<TicketListBlock> {
        const cms = this.cmsService.getTicketListBlock({ ...query, locale: headers['x-locale'] });

        return forkJoin([cms]).pipe(
            concatMap(([cms]) => {
                return this.ticketService
                    .getTicketList({
                        ...(cms.initialFilters || {}),
                        ...query,
                        limit: query.limit || cms.pagination?.limit || 1,
                        offset: query.offset || 0,
                        locale: headers['x-locale'],
                    })
                    .pipe(
                        map((tickets) => {
                            const result = mapTicketList(
                                tickets,
                                cms,
                                headers['x-locale'],
                                headers['x-client-timezone'] || '',
                            );

                            // Extract permissions using ACL service
                            if (headers.authorization) {
                                const permissions = this.authService.canPerformActions(
                                    headers.authorization,
                                    'tickets',
                                    ['view', 'create', 'delete'],
                                );

                                result.permissions = {
                                    view: permissions.view ?? false,
                                    create: permissions.create ?? false,
                                    delete: permissions.delete ?? false,
                                };
                            } else {
                                // Default to allowing view if no authorization token
                                result.permissions = {
                                    view: true,
                                    create: false,
                                    delete: false,
                                };
                            }

                            return result;
                        }),
                    );
            }),
        );
    }
}
