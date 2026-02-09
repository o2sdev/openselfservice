import { CMS } from '@o2s/configs.integrations';

import { CheckoutSummaryBlock } from './checkout-summary.model';

export const mapCheckoutSummary = (
    cms: CMS.Model.CheckoutSummaryBlock.CheckoutSummaryBlock,
    _locale: string,
): CheckoutSummaryBlock => {
    return {
        __typename: 'CheckoutSummaryBlock',
        id: cms.id,
    };
};
