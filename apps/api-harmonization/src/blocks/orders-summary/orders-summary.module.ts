import { DynamicModule, Module } from '@nestjs/common';

import { ApiConfig } from '@o2s/framework/modules';

import { CMS, Orders } from '../../models';

import { OrdersSummaryController } from './orders-summary.controller';
import { OrdersSummaryService } from './orders-summary.service';

@Module({})
export class OrdersSummaryBlockModule {
    static register(_config: ApiConfig): DynamicModule {
        return {
            module: OrdersSummaryBlockModule,
            providers: [OrdersSummaryService, CMS.Service, Orders.Service],
            controllers: [OrdersSummaryController],
            exports: [OrdersSummaryService],
        };
    }
}
