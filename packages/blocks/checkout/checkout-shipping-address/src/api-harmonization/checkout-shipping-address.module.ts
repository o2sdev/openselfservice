import { DynamicModule, Module } from '@nestjs/common';
import { CMS } from '@o2s/configs.integrations';

import * as Framework from '@o2s/framework/modules';

import { CheckoutShippingAddressController } from './checkout-shipping-address.controller';
import { CheckoutShippingAddressService } from './checkout-shipping-address.service';

@Module({})
export class CheckoutShippingAddressBlockModule {
    static register(_config: Framework.ApiConfig): DynamicModule {
        return {
            module: CheckoutShippingAddressBlockModule,
            providers: [
                CheckoutShippingAddressService,
                {
                    provide: CMS.Service,
                    useExisting: Framework.CMS.Service,
                },
            ],
            controllers: [CheckoutShippingAddressController],
            exports: [CheckoutShippingAddressService],
        };
    }
}
