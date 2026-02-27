import { CMS } from '@o2s/configs.integrations';

import type { CheckoutSummaryBlock } from './checkout-summary.model';

export const mapCheckoutSummary = (cms: CMS.Model.CheckoutSummaryBlock.CheckoutSummaryBlock): CheckoutSummaryBlock => {
    return {
        __typename: 'CheckoutSummaryBlock',
        id: cms.id,
        title: cms.title,
        subtitle: cms.subtitle,
        sections: cms.sections,
        buttons: cms.buttons,
        errors: cms.errors,
        loading: cms.loading,
        placeholders: cms.placeholders,
        stepIndicator: cms.stepIndicator,
        cartPath: cms.cartPath,
    };
};
