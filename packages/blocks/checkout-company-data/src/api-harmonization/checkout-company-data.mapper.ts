import { CMS } from '@o2s/configs.integrations';

import { CheckoutCompanyDataBlock } from './checkout-company-data.model';

export const mapCheckoutCompanyData = (
    cms: CMS.Model.CheckoutCompanyDataBlock.CheckoutCompanyDataBlock,
    _locale: string,
): CheckoutCompanyDataBlock => {
    return {
        __typename: 'CheckoutCompanyDataBlock',
        id: cms.id,
    };
};
