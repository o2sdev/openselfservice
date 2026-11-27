import { HttpModule } from '@nestjs/axios';
import { DynamicModule, Global, Module, Type } from '@nestjs/common';

import { OrdersController } from './orders.controller';
import { OrderService } from './orders.service';
import { ApiConfig } from '@/api-config';

@Global()
@Module({})
export class OrdersModule {
    static register(config: ApiConfig): DynamicModule {
        const integration = config.integrations.orders;
        if (!integration?.service) {
            return { module: OrdersModule };
        }

        const service = integration.service;
        const controller = integration.controller || OrdersController;
        const imports = integration.imports || [];

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
