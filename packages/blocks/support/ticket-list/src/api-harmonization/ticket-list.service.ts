import { Injectable } from '@nestjs/common';
import { CMS, Tickets } from '@o2s/configs.integrations';
import { Observable, concatMap, forkJoin, map } from 'rxjs';

import { AppHeaders, HeaderName } from '@o2s/framework/headers';
import { Auth } from '@o2s/framework/modules';

import { mapTicketList } from './ticket-list.mapper';
import { TicketListBlock } from './ticket-list.model';
import { GetTicketListBlockQuery } from './ticket-list.request';

const H = HeaderName;

const DEFAULT_LIMIT = 1;

/** The page size the block renders with: an explicit query value, then the CMS config, then the default. */
const resolveLimit = (query: GetTicketListBlockQuery, cmsLimit?: number): number =>
    Number(query.limit) || Number(cmsLimit) || DEFAULT_LIMIT;

/**
 * `offset` wins when given; a 1-based `page` is resolved with the page size above, which is why this
 * lives here and not in the caller: only the API knows the CMS pagination config.
 */
const resolveOffset = (query: GetTicketListBlockQuery, limit: number): number => {
    const offset = Number(query.offset);

    if (offset > 0) {
        return offset;
    }

    const page = Number(query.page);

    return page > 1 ? (page - 1) * limit : 0;
};

@Injectable()
export class TicketListService {
    constructor(
        private readonly cmsService: CMS.Service,
        private readonly ticketService: Tickets.Service,
        private readonly authService: Auth.Service,
    ) {}

    getTicketListBlock(query: GetTicketListBlockQuery, headers: AppHeaders): Observable<TicketListBlock> {
        const authorization = headers[H.Authorization];
        const cms = this.cmsService.getBlockConfig<CMS.Model.TicketListBlock.TicketListBlock>({
            ...query,
            locale: headers[H.Locale],
            blockType: 'TicketListBlock',
        });

        return forkJoin([cms]).pipe(
            concatMap(([cms]) => {
                // `page` is a URL concern and is consumed here, so it never reaches the tickets module.
                const { page: _page, ...ticketQuery } = query;
                const limit = resolveLimit(query, cms.pagination?.limit);

                return this.ticketService
                    .getTicketList(
                        {
                            ...(cms.initialFilters || {}),
                            ...ticketQuery,
                            limit,
                            offset: resolveOffset(query, limit),
                            locale: headers[H.Locale],
                        },
                        authorization,
                    )
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
