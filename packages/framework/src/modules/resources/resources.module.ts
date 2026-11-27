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
        const integration = config.integrations.resources;
        if (!integration?.service) {
            return { module: ResourceModule };
        }

        const service = integration.service;
        const productService = config.integrations.products?.service;
        const controller = integration.controller || ResourceController;
        const imports = integration.imports || [];

        const provider = {
            provide: ResourceService,
            useClass: service as Type,
        };

        // Only re-provide ProductService when a `products` integration is configured.
        const productProviders = productService ? [{ provide: ProductService, useClass: productService as Type }] : [];

        return {
            module: ResourceModule,
            providers: [provider, ...productProviders],
            imports: [HttpModule, ...imports],
            controllers: [controller],
            exports: [provider],
        };
    }
}
