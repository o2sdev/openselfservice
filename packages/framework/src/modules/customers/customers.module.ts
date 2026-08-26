import { HttpModule } from '@nestjs/axios';
import { DynamicModule, Global, Module, Type } from '@nestjs/common';

import { CustomersController } from './customers.controller';
import { CustomerService } from './customers.service';
import { ApiConfig } from '@/api-config';

@Global()
@Module({})
export class CustomersModule {
    static register(config: ApiConfig): DynamicModule {
        const integration = config.integrations.customers;
        if (!integration?.service) {
            return { module: CustomersModule };
        }

        const service = integration.service;
        const controller = integration.controller || CustomersController;
        const imports = integration.imports || [];

        const provider = {
            provide: CustomerService,
            useClass: service as Type,
        };

        return {
            module: CustomersModule,
            providers: [provider],
            imports: [HttpModule, ...imports],
            controllers: [controller],
            exports: [provider],
        };
    }
}
