import { HttpModule } from '@nestjs/axios';
import { DynamicModule, Module } from '@nestjs/common';
import { CMS, Orders } from '@o2s/configs.integrations';

import * as Framework from '@o2s/framework/modules';

import { OrderListController } from './order-list.controller';
import { OrderListService } from './order-list.service';

@Module({})
export class OrderListBlockModule {
    static register(_config: Framework.ApiConfig): DynamicModule {
        return {
            module: OrderListBlockModule,
            providers: [
                OrderListService,
                {
                    provide: CMS.Service,
                    useExisting: Framework.CMS.Service,
                },
                {
                    provide: Orders.Service,
                    useExisting: Framework.Orders.Service,
                },
            ],
            controllers: [OrderListController],
            exports: [OrderListService],
            imports: [HttpModule],
        };
    }
}
