import { Controller, Get, Headers, Query, UseInterceptors } from '@nestjs/common';
import { LoggerService } from '@o2s/utils.logger';
import { delay } from 'rxjs';

import { AppHeaders } from '@o2s/api-harmonization/utils/headers';

import { URL } from './';
import { GetUserAccountBlockQuery } from './user-account.request';
import { UserAccountService } from './user-account.service';

@Controller(URL)
@UseInterceptors(LoggerService)
export class UserAccountController {
    constructor(protected readonly service: UserAccountService) {}

    @Get()
    getUserAccountBlock(@Headers() headers: AppHeaders, @Query() query: GetUserAccountBlockQuery) {
        return this.service.getUserAccountBlock(query, headers).pipe(delay(500));
    }
}
