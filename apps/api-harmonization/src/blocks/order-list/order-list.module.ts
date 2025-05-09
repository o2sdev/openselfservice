import { DynamicModule, Module } from '@nestjs/common';

import { ApiConfig } from '@o2s/framework/modules';

import { CMS, Orders } from '../../models';

import { OrderListController } from './order-list.controller';
import { OrderListService } from './order-list.service';

@Module({})
export class OrderListBlockModule {
    static register(_config: ApiConfig): DynamicModule {
        return {
            module: OrderListBlockModule,
            providers: [OrderListService, CMS.Service, Orders.Service],
            controllers: [OrderListController],
            exports: [OrderListService],
        };
    }
}
