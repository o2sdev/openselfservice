import { DynamicModule, Module } from '@nestjs/common';
import { CMS, Orders } from '@o2s/configs.integrations';

import * as Framework from '@o2s/framework/modules';

import { OrderConfirmationController } from './order-confirmation.controller';
import { OrderConfirmationService } from './order-confirmation.service';

@Module({})
export class OrderConfirmationBlockModule {
    static register(_config: Framework.ApiConfig): DynamicModule {
        return {
            module: OrderConfirmationBlockModule,
            providers: [
                OrderConfirmationService,
                {
                    provide: CMS.Service,
                    useExisting: Framework.CMS.Service,
                },
                {
                    provide: Orders.Service,
                    useExisting: Framework.Orders.Service,
                },
            ],
            controllers: [OrderConfirmationController],
            exports: [OrderConfirmationService],
        };
    }
}
