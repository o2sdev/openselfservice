import { Injectable } from '@nestjs/common';
import { Observable, forkJoin, map } from 'rxjs';

import { AppHeaders } from '@o2s/api-harmonization/utils/headers';

import { CMS, Users } from '../../models';

import { mapUserAccount } from './user-account.mapper';
import { UserAccountBlock } from './user-account.model';
import { GetUserAccountBlockQuery } from './user-account.request';

@Injectable()
export class UserAccountService {
    constructor(
        private readonly cmsService: CMS.Service,
        private readonly usersService: Users.Service,
    ) {}

    getUserAccountBlock(query: GetUserAccountBlockQuery, headers: AppHeaders): Observable<UserAccountBlock> {
        const cms = this.cmsService.getUserAccountBlock({ id: query.id, locale: headers['x-locale'] });
        const user = this.usersService.getUser({ id: query.userId });
        return forkJoin([cms, user]).pipe(map(([cms, user]) => mapUserAccount(cms, headers['x-locale'], user)));
    }
}
