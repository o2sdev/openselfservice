import { HttpModule } from '@nestjs/axios';
import { DynamicModule, Global, Module } from '@nestjs/common';
import { Type } from '@nestjs/common/interfaces/type.interface';

import { ApiConfig } from '@/api-config';

import { ProductsController } from './products.controller';
import { ProductService } from './products.service';

@Global()
@Module({})
export class ProductsModule {
    static register(config: ApiConfig): DynamicModule {
        const service = config.integrations.products.service;
        const controller = config.integrations.products.controller || ProductsController;
        const imports = config.integrations.cms.imports || [];

        return {
            module: ProductsModule,
            providers: [
                {
                    provide: ProductService,
                    useClass: service as Type,
                },
            ],
            imports: [HttpModule, ...imports],
            controllers: [controller],
            exports: [ProductService],
        };
    }
}
