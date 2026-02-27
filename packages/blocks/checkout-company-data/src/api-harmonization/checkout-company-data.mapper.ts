import { CMS } from '@o2s/configs.integrations';

import type { CheckoutCompanyDataBlock } from './checkout-company-data.model';

export const mapCheckoutCompanyData = (
    cms: CMS.Model.CheckoutCompanyDataBlock.CheckoutCompanyDataBlock,
): CheckoutCompanyDataBlock => {
    return {
        __typename: 'CheckoutCompanyDataBlock',
        id: cms.id,
        title: cms.title,
        subtitle: cms.subtitle,
        fields: cms.fields,
        buttons: cms.buttons,
        errors: cms.errors,
        summaryLabels: cms.summaryLabels,
        stepIndicator: cms.stepIndicator,
        billingInfoNote: cms.billingInfoNote,
        cartPath: cms.cartPath,
    };
};
