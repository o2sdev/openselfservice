import { HttpModule } from '@nestjs/axios';
import { DynamicModule, Module } from '@nestjs/common';
import { Auth, CMS, Products } from '@o2s/configs.integrations';

import * as Framework from '@o2s/framework/modules';

import { ProductListController } from './product-list.controller';
import { ProductListService } from './product-list.service';

@Module({})
export class ProductListBlockModule {
    static register(_config: Framework.ApiConfig): DynamicModule {
        return {
            module: ProductListBlockModule,
            providers: [
                ProductListService,
                {
                    provide: CMS.Service,
                    useExisting: Framework.CMS.Service,
                },
                {
                    provide: Products.Service,
                    useExisting: Framework.Products.Service,
                },
                {
                    provide: Auth.Service,
                    useExisting: Framework.Auth.Service,
                },
            ],
            controllers: [ProductListController],
            imports: [HttpModule],
            exports: [ProductListService],
        };
    }
}
