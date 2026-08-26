import { HttpModule } from '@nestjs/axios';
import { DynamicModule, Global, Module, Type } from '@nestjs/common';

import { PaymentsController } from './payments.controller';
import { PaymentService } from './payments.service';
import { ApiConfig } from '@/api-config';

@Global()
@Module({})
export class PaymentsModule {
    static register(config: ApiConfig): DynamicModule {
        const integration = config.integrations.payments;
        if (!integration?.service) {
            return { module: PaymentsModule };
        }

        const service = integration.service;
        const controller = integration.controller || PaymentsController;
        const imports = integration.imports || [];

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
