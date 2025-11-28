import { CMS, Tickets } from '@o2s/configs.integrations';
import { Observable } from 'rxjs';
import { Models } from '@o2s/utils.api-harmonization';
import { TicketSummaryBlock } from './ticket-summary.model';
import { GetTicketSummaryBlockQuery } from './ticket-summary.request';
export declare class TicketSummaryService {
    private readonly cmsService;
    private readonly ticketService;
    constructor(cmsService: CMS.Service, ticketService: Tickets.Service);
    getTicketSummaryBlock(query: GetTicketSummaryBlockQuery, headers: Models.Headers.AppHeaders): Observable<TicketSummaryBlock>;
}
//# sourceMappingURL=ticket-summary.service.d.ts.map