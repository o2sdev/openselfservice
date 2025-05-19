import { DynamicModule, Module } from '@nestjs/common';

import { ApiConfig } from '@o2s/framework/modules';

import { CMS } from '../../models';

import { CreateNewPasswordPageController } from './create-new-password-page.controller';
import { CreateNewPasswordPageService } from './create-new-password-page.service';

@Module({})
export class CreateNewPasswordPageModule {
    static register(_config: ApiConfig): DynamicModule {
        return {
            module: CreateNewPasswordPageModule,
            providers: [CreateNewPasswordPageService, CMS.Service],
            controllers: [CreateNewPasswordPageController],
            exports: [CreateNewPasswordPageService],
        };
    }
}
