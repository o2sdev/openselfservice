import { HttpModule } from '@nestjs/axios';
import { DynamicModule, Global, Module, Type } from '@nestjs/common';

import { CheckoutController } from './checkout.controller';
import { CheckoutService } from './checkout.service';
import { ApiConfig } from '@/api-config';

@Global()
@Module({})
export class CheckoutModule {
    static register(config: ApiConfig): DynamicModule {
        const service = config.integrations.checkout.service;
        const controller = config.integrations.checkout.controller || CheckoutController;
        const imports = config.integrations.checkout.imports || [];

        const provider = {
            provide: CheckoutService,
            useClass: service as Type,
        };

        return {
            module: CheckoutModule,
            providers: [provider],
            imports: [HttpModule, ...imports],
            controllers: [controller],
            exports: [provider],
        };
    }
}
