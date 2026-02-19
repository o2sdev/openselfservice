import { HttpModule } from '@nestjs/axios';
import { DynamicModule, Global, Module, Type } from '@nestjs/common';

import { PaymentsController } from './payments.controller';
import { PaymentService } from './payments.service';
import { ApiConfig } from '@/api-config';

@Global()
@Module({})
export class PaymentsModule {
    static register(config: ApiConfig): DynamicModule {
        const service = config.integrations.payments.service;
        const controller = config.integrations.payments.controller || PaymentsController;
        const imports = config.integrations.payments.imports || [];

        const provider = {
            provide: PaymentService,
            useClass: service as Type,
        };

        return {
            module: PaymentsModule,
            providers: [provider],
            imports: [HttpModule, ...imports],
            controllers: [controller],
            exports: [provider],
        };
    }
}
