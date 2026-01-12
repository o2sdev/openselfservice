import { DynamicModule, Module } from '@nestjs/common';
import { Auth, CMS, Invoices } from '@o2s/configs.integrations';

import * as Framework from '@o2s/framework/modules';

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
                {
                    provide: Auth.Permissions,
                    useExisting: Framework.Auth.Permissions.Service,
                },
            ],
            controllers: [PaymentsHistoryController],
            exports: [PaymentsHistoryService],
        };
    }
}
