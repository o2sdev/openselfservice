import { DynamicModule, Module } from '@nestjs/common';
import { CMS } from '@o2s/configs.integrations';

import * as Framework from '@o2s/framework/modules';

import { CheckoutBillingPaymentController } from './checkout-billing-payment.controller';
import { CheckoutBillingPaymentService } from './checkout-billing-payment.service';

@Module({})
export class CheckoutBillingPaymentBlockModule {
    static register(_config: Framework.ApiConfig): DynamicModule {
        return {
            module: CheckoutBillingPaymentBlockModule,
            providers: [
                CheckoutBillingPaymentService,
                {
                    provide: CMS.Service,
                    useExisting: Framework.CMS.Service,
                },
            ],
            controllers: [CheckoutBillingPaymentController],
            exports: [CheckoutBillingPaymentService],
        };
    }
}
