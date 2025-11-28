import { Models } from '@o2s/utils.api-harmonization';
import { Sdk } from '@o2s/framework/sdk';
import { Model, Request } from '../api-harmonization/ticket-summary.client';
export declare const ticketSummary: (sdk: Sdk) => {
    blocks: {
        getTicketSummary: (query: Request.GetTicketSummaryBlockQuery, headers: Models.Headers.AppHeaders, authorization?: string) => Promise<Model.TicketSummaryBlock>;
    };
};
//# sourceMappingURL=ticket-summary.d.ts.map