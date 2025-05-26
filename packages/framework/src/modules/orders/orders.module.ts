import { HttpModule } from '@nestjs/axios';
import { DynamicModule, Global, Module, Type } from '@nestjs/common';

import { ApiConfig } from '@/api-config';

import { OrdersController } from './orders.controller';
import { OrderService } from './orders.service';

@Global()
@Module({})
export class OrdersModule {
    static register(config: ApiConfig): DynamicModule {
        const service = config.integrations.orders.service;
        const controller = config.integrations.orders.controller || OrdersController;
        const imports = config.integrations.orders.imports || [];

        return {
            module: OrdersModule,
            providers: [
                {
                    provide: OrderService,
                    useClass: service as Type,
                },
            ],
            imports: [HttpModule, ...imports],
            controllers: [controller],
            exports: [OrderService],
        };
    }
}
