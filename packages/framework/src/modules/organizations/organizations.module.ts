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
        const service = config.integrations.organizations.service;
        const controller = config.integrations.organizations.controller || OrganizationController;
        const imports = config.integrations.organizations.imports || [];

        const provider = {
            provide: OrganizationService,
            useClass: service as Type,
        };
        const providers = config.integrations.organizations.providers || [];

        return {
            module: OrganizationsModule,
            providers: [provider, ...providers],
            imports: [HttpModule, ...imports],
            controllers: [controller],
            exports: [provider],
        };
    }
}
