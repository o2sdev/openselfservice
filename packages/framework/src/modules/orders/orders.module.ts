import { HttpModule } from '@nestjs/axios';
import { DynamicModule, Global, Module, Type } from '@nestjs/common';

import { OrdersController } from './orders.controller';
import { OrderService } from './orders.service';
import { ApiConfig } from '@/api-config';

@Global()
@Module({})
export class OrdersModule {
    static register(config: ApiConfig): DynamicModule {
        const service = config.integrations.orders.service;
        const controller = config.integrations.orders.controller || OrdersController;
        const imports = config.integrations.orders.imports || [];

        const provider = {
            provide: OrderService,
            useClass: service as Type,
        };

        return {
            module: OrdersModule,
            providers: [provider],
            imports: [HttpModule, ...imports],
            controllers: [controller],
            exports: [provider],
        };
    }
}
