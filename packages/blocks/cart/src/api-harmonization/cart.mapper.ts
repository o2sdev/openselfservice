import { CMS, Models } from '@o2s/framework/modules';

import { CartBlock } from './cart.model';

export const mapCart = (cms: CMS.Model.CartBlock.CartBlock): CartBlock => {
    return {
        __typename: 'CartBlock',
        id: cms.id,
        title: cms.title ?? '',
        subtitle: cms.subtitle,
        taxRate: cms.taxRate ?? 0,
        defaultCurrency: (cms.defaultCurrency as Models.Price.Currency) ?? 'PLN',
        labels: cms.labels ?? { itemTotal: '', unknownProductName: '' },
        errors: cms.errors ?? { loadError: '', updateError: '' },
        actions: cms.actions ?? { increaseQuantity: '', decreaseQuantity: '', quantity: '', remove: '' },
        summaryLabels: cms.summaryLabels ?? { title: '', subtotalLabel: '', taxLabel: '', totalLabel: '' },
        checkoutButton: cms.checkoutButton,
        continueShopping: cms.continueShopping,
        empty: cms.empty ?? { title: '', description: '' },
    };
};
