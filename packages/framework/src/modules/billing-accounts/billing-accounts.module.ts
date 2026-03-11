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
        if (!config.integrations.billingAccounts) {
            const provider = { provide: BillingAccountService, useValue: undefined };
            return { module: BillingAccountModule, providers: [provider], exports: [provider] };
        }

        const service = config.integrations.billingAccounts.service;
        const controller = config.integrations.billingAccounts.controller || BillingAccountController;
        const imports = config.integrations.billingAccounts.imports || [];

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
