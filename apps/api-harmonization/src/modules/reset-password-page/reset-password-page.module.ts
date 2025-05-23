import { DynamicModule, Module } from '@nestjs/common';

import { ApiConfig } from '@o2s/framework/modules';

import { CMS } from '../../models';

import { ResetPasswordPageController } from './reset-password-page.controller';
import { ResetPasswordPageService } from './reset-password-page.service';

@Module({})
export class ResetPasswordPageModule {
    static register(_config: ApiConfig): DynamicModule {
        return {
            module: ResetPasswordPageModule,
            providers: [ResetPasswordPageService, CMS.Service],
            controllers: [ResetPasswordPageController],
            exports: [ResetPasswordPageService],
        };
    }
}
