import { DynamicModule, Module } from '@nestjs/common';
import { CMS } from '@o2s/configs.integrations';

import * as Framework from '@o2s/framework/modules';

import { CheckoutSummaryController } from './checkout-summary.controller';
import { CheckoutSummaryService } from './checkout-summary.service';

@Module({})
export class CheckoutSummaryBlockModule {
    static register(_config: Framework.ApiConfig): DynamicModule {
        return {
            module: CheckoutSummaryBlockModule,
            providers: [
                CheckoutSummaryService,
                {
                    provide: CMS.Service,
                    useExisting: Framework.CMS.Service,
                },
            ],
            controllers: [CheckoutSummaryController],
            exports: [CheckoutSummaryService],
        };
    }
}
