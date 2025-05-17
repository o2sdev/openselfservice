import { DynamicModule, Module } from '@nestjs/common';

import { ApiConfig } from '@o2s/framework/modules';

import { CMS, Orders, Products } from '../../models';

import { OrderDetailsController } from './order-details.controller';
import { OrderDetailsService } from './order-details.service';

@Module({})
export class OrderDetailsBlockModule {
    static register(_config: ApiConfig): DynamicModule {
        return {
            module: OrderDetailsBlockModule,
            providers: [OrderDetailsService, CMS.Service, Orders.Service, Products.Service],
            controllers: [OrderDetailsController],
            exports: [OrderDetailsService],
        };
    }
}
