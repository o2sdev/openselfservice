import { CMS } from '@o2s/configs.integrations';

import { OrderConfirmationBlock } from './order-confirmation.model';

export const mapOrderConfirmation = (
    cms: CMS.Model.OrderConfirmationBlock.OrderConfirmationBlock,
    _locale: string,
): OrderConfirmationBlock => {
    return {
        __typename: 'OrderConfirmationBlock',
        id: cms.id,
    };
};
