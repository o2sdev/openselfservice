import { DynamicModule, Module } from '@nestjs/common';

import * as Framework from '@o2s/framework/modules';

import { CMS } from '../../models';

import { LoginPageController } from './login-page.controller';
import { LoginPageService } from './login-page.service';

@Module({})
export class LoginPageModule {
    static register(_config: Framework.ApiConfig): DynamicModule {
        return {
            module: LoginPageModule,
            providers: [
                LoginPageService,
                {
                    provide: CMS.Service,
                    useExisting: Framework.CMS.Service,
                },
            ],
            controllers: [LoginPageController],
            exports: [LoginPageService],
        };
    }
}
