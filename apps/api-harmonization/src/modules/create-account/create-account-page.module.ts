import { DynamicModule, Module } from '@nestjs/common';

import { ApiConfig } from '@o2s/framework/modules';

import { CMS } from '../../models';

import { CreateAccountPageController } from './create-account-page.controller';
import { CreateAccountPageService } from './create-account-page.service';

@Module({})
export class CreateAccountPageModule {
    static register(_config: ApiConfig): DynamicModule {
        return {
            module: CreateAccountPageModule,
            providers: [CreateAccountPageService, CMS.Service],
            controllers: [CreateAccountPageController],
            exports: [CreateAccountPageService],
        };
    }
}
