import { DynamicModule, Module } from '@nestjs/common';

import * as Framework from '@o2s/framework/modules';

import { CMS, Invoices } from '../../models';

import { PaymentsSummaryController } from './payments-summary.controller';
import { PaymentsSummaryService } from './payments-summary.service';

@Module({})
export class PaymentsSummaryBlockModule {
    static register(_config: Framework.ApiConfig): DynamicModule {
        return {
            module: PaymentsSummaryBlockModule,
            providers: [
                PaymentsSummaryService,
                {
                    provide: CMS.Service,
                    useExisting: Framework.CMS.Service,
                },
                {
                    provide: Invoices.Service,
                    useExisting: Framework.Invoices.Service,
                },
            ],
            controllers: [PaymentsSummaryController],
            exports: [PaymentsSummaryService],
        };
    }
}
