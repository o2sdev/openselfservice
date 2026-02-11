import { CMS } from '@o2s/configs.integrations';

import { getCheckoutCompanyDataBlockMock } from './checkout-company-data.mock';
import type { CheckoutCompanyDataBlock } from './checkout-company-data.model';

export const mapCheckoutCompanyData = (
    cms: CMS.Model.CheckoutCompanyDataBlock.CheckoutCompanyDataBlock,
    locale: string,
): CheckoutCompanyDataBlock => {
    return getCheckoutCompanyDataBlockMock(cms.id, locale);
};
