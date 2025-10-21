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
        const service = config.integrations.products.service;
        const controller = config.integrations.products.controller || ProductsController;
        const imports = config.integrations.products.imports || [];

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
