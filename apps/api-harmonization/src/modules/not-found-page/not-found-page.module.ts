import { DynamicModule, Module } from '@nestjs/common';

import * as Framework from '@o2s/framework/modules';

import { CMS } from '../../models';

import { NotFoundPageController } from './not-found-page.controller';
import { NotFoundPageService } from './not-found-page.service';

@Module({})
export class NotFoundPageModule {
    static register(_config: Framework.ApiConfig): DynamicModule {
        return {
            module: NotFoundPageModule,
            providers: [
                NotFoundPageService,
                {
                    provide: CMS.Service,
                    useExisting: Framework.CMS.Service,
                },
            ],
            controllers: [NotFoundPageController],
            exports: [NotFoundPageService],
        };
    }
}
