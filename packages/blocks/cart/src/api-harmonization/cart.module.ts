import { HttpModule } from '@nestjs/axios';
import { DynamicModule, Module } from '@nestjs/common';
import { Auth, CMS, Products } from '@o2s/configs.integrations';

import * as Framework from '@o2s/framework/modules';

import { CartController } from './cart.controller';
import { CartService } from './cart.service';

@Module({})
export class CartBlockModule {
    static register(_config: Framework.ApiConfig): DynamicModule {
        return {
            module: CartBlockModule,
            providers: [
                CartService,
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
            controllers: [CartController],
            imports: [HttpModule],
            exports: [CartService],
        };
    }
}
