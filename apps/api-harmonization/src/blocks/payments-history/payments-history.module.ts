import { DynamicModule, Module } from '@nestjs/common';

import { ApiConfig } from '@o2s/framework/modules';

import { CMS, Invoices } from '../../models';

import { PaymentsHistoryController } from './payments-history.controller';
import { PaymentsHistoryService } from './payments-history.service';

@Module({})
export class PaymentsHistoryBlockModule {
    static register(_config: ApiConfig): DynamicModule {
        return {
            module: PaymentsHistoryBlockModule,
            providers: [PaymentsHistoryService, CMS.Service, Invoices.Service],
            controllers: [PaymentsHistoryController],
            exports: [PaymentsHistoryService],
        };
    }
}
