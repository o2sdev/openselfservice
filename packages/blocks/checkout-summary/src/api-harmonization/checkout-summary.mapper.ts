import { CMS } from '@o2s/configs.integrations';

import { getCheckoutSummaryBlockMock } from './checkout-summary.mock';
import type { CheckoutSummaryBlock } from './checkout-summary.model';

export const mapCheckoutSummary = (
    cms: CMS.Model.CheckoutSummaryBlock.CheckoutSummaryBlock,
    locale: string,
): CheckoutSummaryBlock => {
    return getCheckoutSummaryBlockMock(cms.id, locale);
};
