import { DynamicModule, Module } from '@nestjs/common';
import { CMS, Carts } from '@o2s/configs.integrations';

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
                    provide: Carts.Service,
                    useExisting: Framework.Carts.Service,
                },
            ],
            controllers: [CartController],
            exports: [CartService],
        };
    }
}
