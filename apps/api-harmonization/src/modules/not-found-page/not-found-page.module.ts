import { DynamicModule, Module } from '@nestjs/common';

import { ApiConfig } from '@o2s/framework/modules';

import { CMS } from '../../models';

import { NotFoundPageController } from './not-found-page.controller';
import { NotFoundPageService } from './not-found-page.service';

@Module({})
export class NotFoundPageModule {
    static register(_config: ApiConfig): DynamicModule {
        return {
            module: NotFoundPageModule,
            providers: [NotFoundPageService, CMS.Service],
            controllers: [NotFoundPageController],
            exports: [NotFoundPageService],
        };
    }
}
