import { CMS } from '@o2s/configs.integrations';

import { CartSummaryBlock } from './cart-summary.model';

export const mapCartSummary = (cms: CMS.Model.CartSummaryBlock.CartSummaryBlock, _locale: string): CartSummaryBlock => {
    return {
        __typename: 'CartSummaryBlock',
        id: cms.id,
    };
};
