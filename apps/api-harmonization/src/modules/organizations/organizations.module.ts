import { DynamicModule, Module } from '@nestjs/common';

import { ApiConfig } from '@o2s/framework/modules';

import { CMS, Organizations } from '../../models';

import { OrganizationsController } from './organizations.controller';
import { OrganizationsService } from './organizations.service';

@Module({})
export class OrganizationsModule {
    static register(_config: ApiConfig): DynamicModule {
        return {
            module: OrganizationsModule,
            providers: [OrganizationsService, CMS.Service, Organizations.Service],
            controllers: [OrganizationsController],
            exports: [OrganizationsService],
        };
    }
}
