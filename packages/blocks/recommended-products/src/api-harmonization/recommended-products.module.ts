import { DynamicModule, Module } from '@nestjs/common';
import { CMS, Products } from '@o2s/configs.integrations';

import * as Framework from '@o2s/framework/modules';

import { RecommendedProductsController } from './recommended-products.controller';
import { RecommendedProductsService } from './recommended-products.service';

@Module({})
export class RecommendedProductsBlockModule {
    static register(_config: Framework.ApiConfig): DynamicModule {
        return {
            module: RecommendedProductsBlockModule,
            providers: [
                RecommendedProductsService,
                {
                    provide: CMS.Service,
                    useExisting: Framework.CMS.Service,
                },
                {
                    provide: Products.Service,
                    useExisting: Framework.Products.Service,
                },
            ],
            controllers: [RecommendedProductsController],
            exports: [RecommendedProductsService],
        };
    }
}
