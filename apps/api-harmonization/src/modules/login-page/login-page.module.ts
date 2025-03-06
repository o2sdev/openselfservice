import { DynamicModule, Module } from '@nestjs/common';

import { ApiConfig } from '@o2s/framework/modules';

import { CMS } from '../../models';

import { LoginPageController } from './login-page.controller';
import { LoginPageService } from './login-page.service';

@Module({})
export class LoginPageModule {
    static register(_config: ApiConfig): DynamicModule {
        return {
            module: LoginPageModule,
            providers: [LoginPageService, CMS.Service],
            controllers: [LoginPageController],
            exports: [LoginPageService],
        };
    }
}
