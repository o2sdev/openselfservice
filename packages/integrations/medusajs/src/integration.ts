import { ApiConfig } from '@o2s/framework/modules';

import { Service as OrdersService } from './modules/orders';
import { Service as ProductsService } from './modules/products';
import { Service as ResourcesService } from './modules/resources';
import { MedusaJsModule } from '@/modules/medusajs/medusajs.module';

export * as Integration from './modules/index';

export const Config: Partial<ApiConfig['integrations']> = {
    orders: {
        service: OrdersService,
        imports: [MedusaJsModule],
    },
    resources: {
        service: ResourcesService,
        imports: [MedusaJsModule],
    },
    products: {
        service: ProductsService,
        imports: [MedusaJsModule],
    },
};
