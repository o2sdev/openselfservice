import { DynamicModule, Module } from '@nestjs/common';
import { Products } from '@o2s/configs.integrations';

import * as Framework from '@o2s/framework/modules';

import { ProductDetailsController } from './product-details.controller';
import { ProductDetailsService } from './product-details.service';

@Module({})
export class ProductDetailsBlockModule {
    static register(_config: Framework.ApiConfig): DynamicModule {
        return {
            module: ProductDetailsBlockModule,
            providers: [
                ProductDetailsService,
                {
                    provide: Products.Service,
                    useExisting: Framework.Products.Service,
                },
            ],
            controllers: [ProductDetailsController],
            exports: [ProductDetailsService],
        };
    }
}
