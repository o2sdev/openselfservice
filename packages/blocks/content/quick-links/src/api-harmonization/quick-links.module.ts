import { DynamicModule, Module } from '@nestjs/common';
import { CMS } from '@o2s/configs.integrations';

import * as Framework from '@o2s/framework/modules';

import { QuickLinksController } from './quick-links.controller';
import { QuickLinksService } from './quick-links.service';

@Module({})
export class QuickLinksBlockModule {
    static register(_config: Framework.ApiConfig): DynamicModule {
        return {
            module: QuickLinksBlockModule,
            providers: [
                QuickLinksService,
                {
                    provide: CMS.Service,
                    useExisting: Framework.CMS.Service,
                },
            ],
            controllers: [QuickLinksController],
            exports: [QuickLinksService],
        };
    }
}
