import { Controller, Get, Headers, Query, UseInterceptors } from '@nestjs/common';

import { LoggerService } from '@o2s/utils.logger';

import { AppHeaders } from '@o2s/framework/headers';
import { Auth } from '@o2s/framework/modules';

import { URL } from './';
import { GetUserAccountBlockQuery } from './user-account.request';
import { UserAccountService } from './user-account.service';

@Controller(URL)
@UseInterceptors(LoggerService)
export class UserAccountController {
    constructor(protected readonly service: UserAccountService) {}

    @Get()
    @Auth.Decorators.Permissions({ resource: 'settings', actions: ['view'] })
    getUserAccountBlock(@Headers() headers: AppHeaders, @Query() query: GetUserAccountBlockQuery) {
        return this.service.getUserAccountBlock(query, headers);
    }
}
