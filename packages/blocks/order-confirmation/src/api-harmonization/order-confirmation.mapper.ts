import { CMS } from '@o2s/configs.integrations';

import { getOrderConfirmationBlockMock } from './order-confirmation.mock';
import type { OrderConfirmationBlock } from './order-confirmation.model';

export const mapOrderConfirmation = (
    cms: CMS.Model.OrderConfirmationBlock.OrderConfirmationBlock,
    locale: string,
    orderId: string,
): OrderConfirmationBlock => {
    return getOrderConfirmationBlockMock(cms.id, orderId, locale);
};
