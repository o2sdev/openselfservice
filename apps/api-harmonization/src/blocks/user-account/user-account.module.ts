import { DynamicModule, Module } from '@nestjs/common';

import { ApiConfig } from '@o2s/framework/modules';

import { CMS, Users } from '../../models';

import { UserAccountController } from './user-account.controller';
import { UserAccountService } from './user-account.service';

@Module({})
export class UserAccountBlockModule {
    static register(_config: ApiConfig): DynamicModule {
        return {
            module: UserAccountBlockModule,
            providers: [UserAccountService, CMS.Service, Users.Service],
            controllers: [UserAccountController],
            exports: [UserAccountService],
        };
    }
}
