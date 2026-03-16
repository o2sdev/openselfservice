import { Injectable } from '@nestjs/common';
import { CMS, Users } from '@o2s/configs.integrations';
import { Observable, forkJoin, map } from 'rxjs';

import { AppHeaders, HeaderName } from '@o2s/framework/headers';
import { Auth } from '@o2s/framework/modules';

import { mapUserAccount } from './user-account.mapper';
import { UserAccountBlock } from './user-account.model';
import { GetUserAccountBlockQuery } from './user-account.request';

const H = HeaderName;

@Injectable()
export class UserAccountService {
    constructor(
        private readonly cmsService: CMS.Service,
        private readonly usersService: Users.Service,
        private readonly authService: Auth.Service,
    ) {}

    getUserAccountBlock(query: GetUserAccountBlockQuery, headers: AppHeaders): Observable<UserAccountBlock> {
        const cms = this.cmsService.getUserAccountBlock({ id: query.id, locale: headers[H.Locale] });
        const user = this.usersService.getUser({ id: query.userId }, headers[H.Authorization]);

        return forkJoin([cms, user]).pipe(
            map(([cms, user]) => {
                const result = mapUserAccount(cms, headers[H.Locale], user);

                // Extract permissions using ACL service
                if (headers[H.Authorization]) {
                    const permissions = this.authService.canPerformActions(headers[H.Authorization], 'settings', [
                        'view',
                        'edit',
                    ]);

                    result.permissions = {
                        view: permissions.view ?? false,
                        edit: permissions.edit ?? false,
                    };
                }

                return result;
            }),
        );
    }
}
