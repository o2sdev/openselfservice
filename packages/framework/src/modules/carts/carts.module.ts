import { HttpModule } from '@nestjs/axios';
import { DynamicModule, Global, Module, Type } from '@nestjs/common';

import { CartsController } from './carts.controller';
import { CartService } from './carts.service';
import { ApiConfig } from '@/api-config';

@Global()
@Module({})
export class CartsModule {
    static register(config: ApiConfig): DynamicModule {
        const integration = config.integrations.carts;
        if (!integration?.service) {
            return { module: CartsModule };
        }

        const service = integration.service;
        const controller = integration.controller || CartsController;
        const imports = integration.imports || [];

        const provider = {
            provide: CartService,
            useClass: service as Type,
        };

        return {
            module: CartsModule,
            providers: [provider],
            imports: [HttpModule, ...imports],
            controllers: [controller],
            exports: [provider],
        };
    }
}
