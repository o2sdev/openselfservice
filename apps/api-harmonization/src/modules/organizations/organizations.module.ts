import { DynamicModule, Module } from '@nestjs/common';
import { CMS, Organizations } from '@o2s/configs.integrations';

import * as Framework from '@o2s/framework/modules';

import { CMSBaseModule, OrganizationsBaseModule } from '../../app.module';

import { OrganizationsController } from './organizations.controller';
import { OrganizationsService } from './organizations.service';

@Module({})
export class OrganizationsModule {
    static register(_config: Framework.ApiConfig): DynamicModule {
        return {
            module: OrganizationsModule,
            imports: [CMSBaseModule, OrganizationsBaseModule],
            providers: [
                OrganizationsService,
                {
                    provide: CMS.Service,
                    useExisting: Framework.CMS.Service,
                },
                {
                    provide: Organizations.Service,
                    useExisting: Framework.Organizations.Service,
                },
            ],
            controllers: [OrganizationsController],
        };
    }
}
