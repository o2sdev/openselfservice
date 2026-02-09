import { ApiConfig } from '@o2s/framework/modules';
import { Auth } from '@o2s/framework/modules';

import { MedusaJsModule } from '@/modules/medusajs/medusajs.module';

import { Service as CartsService } from './modules/carts';
import { Service as OrdersService } from './modules/orders';
import { Service as ProductsService } from './modules/products';
import { Service as ResourcesService } from './modules/resources';

export * as Integration from './modules/index';

export const Config: Partial<ApiConfig['integrations']> = {
    orders: {
        name: 'medusajs',
        service: OrdersService,
        imports: [MedusaJsModule, Auth.Module],
    },
    resources: {
        name: 'medusajs',
        service: ResourcesService,
        imports: [MedusaJsModule, Auth.Module],
    },
    products: {
        name: 'medusajs',
        service: ProductsService,
        imports: [MedusaJsModule, Auth.Module],
    },
    carts: {
        name: 'medusajs',
        service: CartsService,
        imports: [MedusaJsModule, Auth.Module],
    },
};
