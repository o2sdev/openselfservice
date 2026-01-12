import { Controller, Get, Headers, Query, UseInterceptors } from '@nestjs/common';

import { Models as ApiModels } from '@o2s/utils.api-harmonization';
import { LoggerService } from '@o2s/utils.logger';

import { Auth } from '@o2s/framework/modules';

import { URL } from './';
import { GetUserAccountBlockQuery } from './user-account.request';
import { UserAccountService } from './user-account.service';

@Controller(URL)
@UseInterceptors(LoggerService)
export class UserAccountController {
    constructor(protected readonly service: UserAccountService) {}

    @Get()
    @Auth.Decorators.Permissions({ resource: 'users', actions: ['view'] })
    getUserAccountBlock(@Headers() headers: ApiModels.Headers.AppHeaders, @Query() query: GetUserAccountBlockQuery) {
        return this.service.getUserAccountBlock(query, headers);
    }
}
