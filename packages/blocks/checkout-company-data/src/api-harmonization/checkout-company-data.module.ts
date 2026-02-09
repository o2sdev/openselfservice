import { DynamicModule, Module } from '@nestjs/common';
import { CMS } from '@o2s/configs.integrations';

import * as Framework from '@o2s/framework/modules';

import { CheckoutCompanyDataController } from './checkout-company-data.controller';
import { CheckoutCompanyDataService } from './checkout-company-data.service';

@Module({})
export class CheckoutCompanyDataBlockModule {
    static register(_config: Framework.ApiConfig): DynamicModule {
        return {
            module: CheckoutCompanyDataBlockModule,
            providers: [
                CheckoutCompanyDataService,
                {
                    provide: CMS.Service,
                    useExisting: Framework.CMS.Service,
                },
            ],
            controllers: [CheckoutCompanyDataController],
            exports: [CheckoutCompanyDataService],
        };
    }
}
