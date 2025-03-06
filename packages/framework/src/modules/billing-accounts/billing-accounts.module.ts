import { HttpModule } from '@nestjs/axios';
import { DynamicModule, Module } from '@nestjs/common';
import { Type } from '@nestjs/common/interfaces/type.interface';

import { BillingAccountController } from './billing-accounts.controller';
import { BillingAccountService } from './billing-accounts.service';
import { ApiConfig } from '@/api-config';

@Module({})
export class BillingAccountModule {
    static register(config: ApiConfig): DynamicModule {
        const service = config.integrations.billingAccounts.service;
        const controller = config.integrations.billingAccounts.controller || BillingAccountController;
        const imports = config.integrations.cms.imports || [];

        return {
            module: BillingAccountModule,
            providers: [
                {
                    provide: BillingAccountService,
                    useClass: service as Type,
                },
            ],
            imports: [HttpModule, ...imports],
            controllers: [controller],
            exports: [BillingAccountService],
        };
    }
}
