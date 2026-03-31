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
        const authorization = headers[H.Authorization];
        const cms = this.cmsService.getBlockConfig<CMS.Model.UserAccountBlock.UserAccountBlock>({
            id: query.id,
            locale: headers[H.Locale],
            blockType: 'UserAccountBlock',
        });
        const user = this.usersService.getUser({ id: query.userId }, authorization);

        return forkJoin([cms, user]).pipe(
            map(([cms, user]) => {
                const result = mapUserAccount(cms, headers[H.Locale], user);

                // Extract permissions using ACL service
                if (authorization) {
                    const permissions = this.authService.canPerformActions(authorization, 'settings', ['view', 'edit']);

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
