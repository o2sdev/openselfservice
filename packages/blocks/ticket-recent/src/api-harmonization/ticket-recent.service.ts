import { Injectable } from '@nestjs/common';
import { CMS, Tickets } from '@o2s/configs.integrations';
import { Observable, concatMap, forkJoin, map } from 'rxjs';

import { AppHeaders, HeaderName } from '@o2s/framework/headers';
import { Auth } from '@o2s/framework/modules';

import { mapTicketRecent } from './ticket-recent.mapper';
import { TicketRecentBlock } from './ticket-recent.model';
import { GetTicketRecentBlockQuery } from './ticket-recent.request';

const H = HeaderName;

@Injectable()
export class TicketRecentService {
    constructor(
        private readonly cmsService: CMS.Service,
        private readonly ticketsService: Tickets.Service,
        private readonly authService: Auth.Service,
    ) {}

    getTicketRecentBlock(query: GetTicketRecentBlockQuery, headers: AppHeaders): Observable<TicketRecentBlock> {
        const cms = this.cmsService.getTicketRecentBlock({ ...query, locale: headers[H.Locale] });

        return forkJoin([cms]).pipe(
            concatMap(([cms]) => {
                return this.ticketsService
                    .getTicketList({ ...query, limit: cms.limit, locale: headers[H.Locale] })
                    .pipe(
                        map((tickets) => {
                            const result = mapTicketRecent(
                                cms,
                                tickets,
                                headers[H.Locale],
                                headers[H.ClientTimezone] || '',
                            );

                            // Extract permissions using ACL service
                            if (headers[H.Authorization]) {
                                const permissions = this.authService.canPerformActions(
                                    headers[H.Authorization],
                                    'tickets',
                                    ['view', 'create'],
                                );

                                result.permissions = {
                                    view: permissions.view ?? false,
                                    create: permissions.create ?? false,
                                };
                            }

                            return result;
                        }),
                    );
            }),
        );
    }
}
