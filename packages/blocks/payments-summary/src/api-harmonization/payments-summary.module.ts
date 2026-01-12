import { DynamicModule, Module } from '@nestjs/common';
import { Auth, CMS, Invoices } from '@o2s/configs.integrations';

import * as Framework from '@o2s/framework/modules';

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
                {
                    provide: Auth.Permissions,
                    useExisting: Framework.Auth.Permissions.Service,
                },
            ],
            controllers: [PaymentsSummaryController],
            exports: [PaymentsSummaryService],
        };
    }
}
