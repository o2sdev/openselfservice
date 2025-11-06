import { CMS } from '@o2s/configs.integrations';

import { TicketSummaryBlock } from './ticket-summary.model';

export const mapTicketSummary = (
    cms: CMS.Model.TicketSummaryBlock.TicketSummaryBlock,
    _locale: string,
): TicketSummaryBlock => {
    return {
        __typename: 'TicketSummaryBlock',
        id: cms.id,
    };
};
