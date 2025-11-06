import { Injectable } from '@nestjs/common';
import { CMS } from '@o2s/configs.integrations';
import { Observable, forkJoin, map } from 'rxjs';

import { Models } from '@o2s/utils.api-harmonization';

import { mapTicketSummary } from './ticket-summary.mapper';
import { TicketSummaryBlock } from './ticket-summary.model';
import { GetTicketSummaryBlockQuery } from './ticket-summary.request';

@Injectable()
export class TicketSummaryService {
    constructor(private readonly cmsService: CMS.Service) {}

    getTicketSummaryBlock(
        query: GetTicketSummaryBlockQuery,
        headers: Models.Headers.AppHeaders,
    ): Observable<TicketSummaryBlock> {
        const cms = this.cmsService.getTicketSummaryBlock({ ...query, locale: headers['x-locale'] });

        return forkJoin([cms]).pipe(map(([cms]) => mapTicketSummary(cms, headers['x-locale'])));
    }
}
