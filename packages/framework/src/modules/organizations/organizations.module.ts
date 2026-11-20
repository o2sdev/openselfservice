import { HttpModule } from '@nestjs/axios';
import { DynamicModule, Global, Module } from '@nestjs/common';
import { Type } from '@nestjs/common/interfaces/type.interface';

import { OrganizationController } from './organizations.controller';
import { OrganizationService } from './organizations.service';
import { ApiConfig } from '@/api-config';

@Global()
@Module({})
export class OrganizationsModule {
    static register(config: ApiConfig): DynamicModule {
        const integration = config.integrations.organizations;
        if (!integration?.service) {
            return { module: OrganizationsModule };
        }

        const service = integration.service;
        const controller = integration.controller || OrganizationController;
        const imports = integration.imports || [];

        const provider = {
            provide: OrganizationService,
            useClass: service as Type,
        };
        const providers = integration.providers || [];

        return {
            module: OrganizationsModule,
            providers: [provider, ...providers],
            imports: [HttpModule, ...imports],
            controllers: [controller],
            exports: [provider],
        };
    }
}
