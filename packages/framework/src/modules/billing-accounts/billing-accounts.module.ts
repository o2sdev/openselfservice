import { HttpModule } from '@nestjs/axios';
import { DynamicModule, Global, Module } from '@nestjs/common';
import { Type } from '@nestjs/common/interfaces/type.interface';

import { BillingAccountController } from './billing-accounts.controller';
import { BillingAccountService } from './billing-accounts.service';
import { ApiConfig } from '@/api-config';

@Global()
@Module({})
export class BillingAccountModule {
    static register(config: ApiConfig): DynamicModule {
        const integration = config.integrations.billingAccounts;
        if (!integration?.service) {
            return { module: BillingAccountModule };
        }

        const service = integration.service;
        const controller = integration.controller || BillingAccountController;
        const imports = integration.imports || [];

        const provider = {
            provide: BillingAccountService,
            useClass: service as Type,
        };

        return {
            module: BillingAccountModule,
            providers: [provider],
            imports: [HttpModule, ...imports],
            controllers: [controller],
            exports: [provider],
        };
    }
}
