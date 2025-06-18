import { DynamicModule, Module } from '@nestjs/common';

import * as Framework from '@o2s/framework/modules';

import { CMS, Invoices } from '../../models';

import { PaymentsHistoryController } from './payments-history.controller';
import { PaymentsHistoryService } from './payments-history.service';

@Module({})
export class PaymentsHistoryBlockModule {
    static register(_config: Framework.ApiConfig): DynamicModule {
        return {
            module: PaymentsHistoryBlockModule,
            providers: [
                PaymentsHistoryService,
                {
                    provide: CMS.Service,
                    useExisting: Framework.CMS.Service,
                },
                {
                    provide: Invoices.Service,
                    useExisting: Framework.Invoices.Service,
                },
            ],
            controllers: [PaymentsHistoryController],
            exports: [PaymentsHistoryService],
        };
    }
}
