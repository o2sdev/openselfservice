import { CMS } from '@o2s/configs.integrations';
import { DynamicModule, Module } from '@nestjs/common';

import * as Framework from '@o2s/framework/modules';

import { CartSummaryController } from './cart-summary.controller';
import { CartSummaryService } from './cart-summary.service';

@Module({})
export class CartSummaryBlockModule {
    static register(_config: Framework.ApiConfig): DynamicModule {
        return {
            module: CartSummaryBlockModule,
            providers: [
                CartSummaryService,
                {
                    provide: CMS.Service,
                    useExisting: Framework.CMS.Service,
                },
            ],
            controllers: [CartSummaryController],
            exports: [CartSummaryService],
        };
    }
}

