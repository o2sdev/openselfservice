import { HttpModule } from '@nestjs/axios';
import { DynamicModule, Global, Module, Type } from '@nestjs/common';

import { CustomersController } from './customers.controller';
import { CustomerService } from './customers.service';
import { ApiConfig } from '@/api-config';

@Global()
@Module({})
export class CustomersModule {
    static register(config: ApiConfig): DynamicModule {
        const service = config.integrations.customers.service;
        const controller = config.integrations.customers.controller || CustomersController;
        const imports = config.integrations.customers.imports || [];

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
