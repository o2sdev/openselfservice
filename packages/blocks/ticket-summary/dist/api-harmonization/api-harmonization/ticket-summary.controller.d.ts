import { Models } from '@o2s/utils.api-harmonization';
import { GetTicketSummaryBlockQuery } from './ticket-summary.request';
import { TicketSummaryService } from './ticket-summary.service';
export declare class TicketSummaryController {
    protected readonly service: TicketSummaryService;
    constructor(service: TicketSummaryService);
    getTicketSummaryBlock(headers: Models.Headers.AppHeaders, query: GetTicketSummaryBlockQuery): import("rxjs").Observable<import("./ticket-summary.model").TicketSummaryBlock>;
}
//# sourceMappingURL=ticket-summary.controller.d.ts.map