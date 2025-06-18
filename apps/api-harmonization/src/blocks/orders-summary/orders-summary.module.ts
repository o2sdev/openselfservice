import { HttpModule } from '@nestjs/axios';
import { DynamicModule, Module } from '@nestjs/common';

import * as Framework from '@o2s/framework/modules';

import { CMS, Orders } from '../../models';

import { OrdersSummaryController } from './orders-summary.controller';
import { OrdersSummaryService } from './orders-summary.service';

@Module({})
export class OrdersSummaryBlockModule {
    static register(_config: Framework.ApiConfig): DynamicModule {
        return {
            module: OrdersSummaryBlockModule,
            providers: [
                OrdersSummaryService,
                {
                    provide: CMS.Service,
                    useExisting: Framework.CMS.Service,
                },
                {
                    provide: Orders.Service,
                    useExisting: Framework.Orders.Service,
                },
            ],
            controllers: [OrdersSummaryController],
            exports: [OrdersSummaryService],
            imports: [HttpModule],
        };
    }
}
