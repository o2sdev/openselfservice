import { DynamicModule, Module } from '@nestjs/common';

import { ApiConfig } from '@o2s/framework/modules';

import { CMS } from '../../models';

import { QuickLinksController } from './quick-links.controller';
import { QuickLinksService } from './quick-links.service';

@Module({})
export class QuickLinksBlockModule {
    static register(_config: ApiConfig): DynamicModule {
        return {
            module: QuickLinksBlockModule,
            providers: [QuickLinksService, CMS.Service],
            controllers: [QuickLinksController],
            exports: [QuickLinksService],
        };
    }
}
