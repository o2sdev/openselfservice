import { HttpModule } from '@nestjs/axios';
import { DynamicModule, Global, Module } from '@nestjs/common';
import { Type } from '@nestjs/common/interfaces/type.interface';

import { ProductService } from '../products/products.service';

import { ResourceController } from './resources.controller';
import { ResourceService } from './resources.service';
import { ApiConfig } from '@/api-config';

@Global()
@Module({})
export class ResourceModule {
    static register(config: ApiConfig): DynamicModule {
        const service = config.integrations.resources.service;
        const productService = config.integrations.products.service;
        const controller = config.integrations.resources.controller || ResourceController;
        const imports = config.integrations.resources.imports || [];

        const provider = {
            provide: ResourceService,
            useClass: service as Type,
        };

        const productProvider = {
            provide: ProductService,
            useClass: productService as Type,
        };

        return {
            module: ResourceModule,
            providers: [provider, productProvider],
            imports: [HttpModule, ...imports],
            controllers: [controller],
            exports: [provider],
        };
    }
}
