import { DynamicModule, Module } from '@nestjs/common';

import { ApiConfig } from '@o2s/framework/modules';

import { CMS, Invoices } from '../../models';

import { PaymentsSummaryController } from './payments-summary.controller';
import { PaymentsSummaryService } from './payments-summary.service';

@Module({})
export class PaymentsSummaryComponentModule {
    static register(_config: ApiConfig): DynamicModule {
        return {
            module: PaymentsSummaryComponentModule,
            providers: [PaymentsSummaryService, CMS.Service, Invoices.Service],
            controllers: [PaymentsSummaryController],
            exports: [PaymentsSummaryService],
        };
    }
}
