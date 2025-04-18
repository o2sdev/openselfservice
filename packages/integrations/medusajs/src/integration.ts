import { ApiConfig } from '@o2s/framework/modules';

import { Service as OrdersService } from './modules/orders';

export * as Integration from './modules/index';

export const Config: Partial<ApiConfig['integrations']> = {
    orders: {
        service: OrdersService,
    },
};
