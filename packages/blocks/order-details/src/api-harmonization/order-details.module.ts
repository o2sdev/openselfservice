import { HttpModule } from '@nestjs/axios';
import { DynamicModule, Module } from '@nestjs/common';
import { Auth, CMS, Orders } from '@o2s/configs.integrations';

import * as Framework from '@o2s/framework/modules';

import { OrderDetailsController } from './order-details.controller';
import { OrderDetailsService } from './order-details.service';

@Module({})
export class OrderDetailsBlockModule {
    static register(_config: Framework.ApiConfig): DynamicModule {
        return {
            module: OrderDetailsBlockModule,
            providers: [
                OrderDetailsService,
                {
                    provide: CMS.Service,
                    useExisting: Framework.CMS.Service,
                },
                {
                    provide: Orders.Service,
                    useExisting: Framework.Orders.Service,
                },
                {
                    provide: Auth.Permissions,
                    useExisting: Framework.Auth.Permissions.Service,
                },
            ],
            controllers: [OrderDetailsController],
            exports: [OrderDetailsService],
            imports: [HttpModule],
        };
    }
}
