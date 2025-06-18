import { DynamicModule, Module } from '@nestjs/common';

import * as Framework from '@o2s/framework/modules';

import { Articles, CMS } from '../../models';

import { PageController } from './page.controller';
import { PageService } from './page.service';

@Module({})
export class PageModule {
    static register(_config: Framework.ApiConfig): DynamicModule {
        return {
            module: PageModule,
            providers: [
                PageService,
                {
                    provide: CMS.Service,
                    useExisting: Framework.CMS.Service,
                },
                {
                    provide: Articles.Service,
                    useExisting: Framework.Articles.Service,
                },
            ],
            controllers: [PageController],
            exports: [PageService],
        };
    }
}
