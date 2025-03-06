import { DynamicModule, Module } from '@nestjs/common';

import { ApiConfig } from '@o2s/framework/modules';

import { CMS } from '../../models';

import { PageController } from './page.controller';
import { PageService } from './page.service';

@Module({})
export class PageModule {
    static register(_config: ApiConfig): DynamicModule {
        return {
            module: PageModule,
            providers: [PageService, CMS.Service],
            controllers: [PageController],
            exports: [PageService],
        };
    }
}
