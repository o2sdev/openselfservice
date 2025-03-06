import { Injectable } from '@nestjs/common';
import { Observable, forkJoin, map } from 'rxjs';

import { AppHeaders } from '@o2s/api-harmonization/utils/headers';

import { CMS, Users } from '../../models';

import { mapUserAccount } from './user-account.mapper';
import { UserAccountComponent } from './user-account.model';
import { GetUserAccountComponentQuery } from './user-account.request';

@Injectable()
export class UserAccountService {
    constructor(
        private readonly cmsService: CMS.Service,
        private readonly usersService: Users.Service,
    ) {}

    getUserAccountComponent(
        query: GetUserAccountComponentQuery,
        headers: AppHeaders,
    ): Observable<UserAccountComponent> {
        const cms = this.cmsService.getUserAccountComponent({ ...query, locale: headers['x-locale'] });
        const user = this.usersService.getCurrentUser();
        return forkJoin([cms, user]).pipe(map(([cms, user]) => mapUserAccount(cms, headers['x-locale'], user)));
    }
}
