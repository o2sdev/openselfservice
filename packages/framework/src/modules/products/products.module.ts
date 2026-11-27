import { HttpModule } from '@nestjs/axios';
import { DynamicModule, Global, Module } from '@nestjs/common';
import { Type } from '@nestjs/common/interfaces/type.interface';

import { ProductsController } from './products.controller';
import { ProductService } from './products.service';
import { ApiConfig } from '@/api-config';

@Global()
@Module({})
export class ProductsModule {
    static register(config: ApiConfig): DynamicModule {
        const integration = config.integrations.products;
        if (!integration?.service) {
            return { module: ProductsModule };
        }

        const service = integration.service;
        const controller = integration.controller || ProductsController;
        const imports = integration.imports || [];

        const provider = {
            provide: ProductService,
            useClass: service as Type,
        };

        return {
            module: ProductsModule,
            providers: [provider],
            imports: [HttpModule, ...imports],
            controllers: [controller],
            exports: [provider],
        };
    }
}
