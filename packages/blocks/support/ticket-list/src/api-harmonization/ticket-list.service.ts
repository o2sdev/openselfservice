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
 * `offset` wins whenever it is given, `0` included; otherwise a 1-based `page` is resolved with the
 * page size above, which is why this lives here and not in the caller: only the API knows the CMS
 * pagination config.
 */
const resolveOffset = (query: GetTicketListBlockQuery, limit: number): number => {
    // Supplied rather than positive: a caller asking for the first page as `offset=0` means it, and a
    // `page` further down the query string must not override it. A value that is not a usable offset
    // (empty, not a number, negative) is treated as absent, so `page` still gets its turn.
    const offset = Number(query.offset);
    const hasOffset = query.offset !== undefined && String(query.offset).trim() !== '';

    if (hasOffset && Number.isFinite(offset) && offset >= 0) {
        return offset;
    }

    // Only a whole number of pages resolves; a fraction or `Infinity` would become an offset no
    // backend can use, and asking for the first page is the safe reading of an unusable value.
    const page = Number(query.page);

    return Number.isSafeInteger(page) && page > 1 ? (page - 1) * limit : 0;
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
