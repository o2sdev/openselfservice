import { DynamicModule, Module } from '@nestjs/common';
import { CMS, Users } from '@o2s/configs.integrations';

import * as Framework from '@o2s/framework/modules';
import { ApiConfig } from '@o2s/framework/modules';

import { UserAccountController } from './user-account.controller';
import { UserAccountService } from './user-account.service';

@Module({})
export class UserAccountBlockModule {
    static register(_config: ApiConfig): DynamicModule {
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
            ],
            controllers: [UserAccountController],
            exports: [UserAccountService],
        };
    }
}
