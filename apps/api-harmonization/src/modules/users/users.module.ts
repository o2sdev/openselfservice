import { DynamicModule, Module } from '@nestjs/common';

import { ApiConfig } from '@o2s/framework/modules';

import { CMS, Users } from '@o2s/api-harmonization/models/index';

import { UsersController } from './users.controller';
import { UsersService } from './users.service';

@Module({})
export class UsersBlockModule {
    static register(_config: ApiConfig): DynamicModule {
        return {
            module: UsersBlockModule,
            providers: [UsersService, CMS.Service, Users.Service],
            controllers: [UsersController],
            exports: [UsersService],
        };
    }
}
