import { CMS, Models } from '@o2s/framework/modules';

import { CartBlock } from './cart.model';

export const mapCart = (cms: CMS.Model.CartBlock.CartBlock): CartBlock => {
    return {
        __typename: 'CartBlock',
        id: cms.id,
        title: cms.title,
        subtitle: cms.subtitle,
        defaultCurrency: cms.defaultCurrency as Models.Price.Currency,
        labels: cms.labels,
        errors: cms.errors,
        actions: cms.actions,
        summaryLabels: cms.summaryLabels,
        checkoutButton: cms.checkoutButton,
        continueShopping: cms.continueShopping,
        empty: cms.empty,
    };
};
