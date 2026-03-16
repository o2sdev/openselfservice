import { Injectable } from '@nestjs/common';
import { CMS, Tickets } from '@o2s/configs.integrations';
import { Observable, concatMap, forkJoin, map } from 'rxjs';

import { AppHeaders, HeaderName } from '@o2s/framework/headers';
import { Auth } from '@o2s/framework/modules';

import { mapTicketList } from './ticket-list.mapper';
import { TicketListBlock } from './ticket-list.model';
import { GetTicketListBlockQuery } from './ticket-list.request';

const H = HeaderName;

@Injectable()
export class TicketListService {
    constructor(
        private readonly cmsService: CMS.Service,
        private readonly ticketService: Tickets.Service,
        private readonly authService: Auth.Service,
    ) {}

    getTicketListBlock(query: GetTicketListBlockQuery, headers: AppHeaders): Observable<TicketListBlock> {
        const authorization = headers[H.Authorization];
        const cms = this.cmsService.getTicketListBlock({ ...query, locale: headers[H.Locale] });

        return forkJoin([cms]).pipe(
            concatMap(([cms]) => {
                return this.ticketService
                    .getTicketList({
                        ...(cms.initialFilters || {}),
                        ...query,
                        limit: query.limit || cms.pagination?.limit || 1,
                        offset: query.offset || 0,
                        locale: headers[H.Locale],
                    })
                    .pipe(
                        map((tickets) => {
                            const result = mapTicketList(
                                tickets,
                                cms,
                                headers[H.Locale],
                                headers[H.ClientTimezone] || '',
                            );

                            // Extract permissions using ACL service
                            if (authorization) {
                                const permissions = this.authService.canPerformActions(authorization, 'tickets', [
                                    'view',
                                    'create',
                                    'delete',
                                ]);

                                result.permissions = {
                                    view: permissions.view ?? false,
                                    create: permissions.create ?? false,
                                    delete: permissions.delete ?? false,
                                };
                            }

                            return result;
                        }),
                    );
            }),
        );
    }
}
