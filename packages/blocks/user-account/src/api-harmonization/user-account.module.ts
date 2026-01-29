import { DynamicModule, Module } from '@nestjs/common';
import { Auth, CMS, Users } from '@o2s/configs.integrations';

import * as Framework from '@o2s/framework/modules';

import { UserAccountController } from './user-account.controller';
import { UserAccountService } from './user-account.service';

@Module({})
export class UserAccountBlockModule {
    static register(_config: Framework.ApiConfig): DynamicModule {
        return {
            module: UserAccountBlockModule,
            providers: [
                UserAccountService,
                {
                    provide: CMS.Service,
                    useExisting: Framework.CMS.Service,
                },
                {
                    provide: Users.Service,
                    useExisting: Framework.Users.Service,
                },
                {
                    provide: Auth.Service,
                    useExisting: Framework.Auth.Service,
                },
            ],
            controllers: [UserAccountController],
            exports: [UserAccountService],
        };
    }
}
