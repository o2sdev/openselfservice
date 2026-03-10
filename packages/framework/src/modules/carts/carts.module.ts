import { HttpModule } from '@nestjs/axios';
import { DynamicModule, Global, Module, Type } from '@nestjs/common';

import { CartsController } from './carts.controller';
import { CartService } from './carts.service';
import { ApiConfig } from '@/api-config';

@Global()
@Module({})
export class CartsModule {
    static register(config: ApiConfig): DynamicModule {
        const service = config.integrations.carts.service;
        const controller = config.integrations.carts.controller || CartsController;
        const imports = config.integrations.carts.imports || [];

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
