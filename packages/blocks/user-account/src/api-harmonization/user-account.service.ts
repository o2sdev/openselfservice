import { Injectable } from '@nestjs/common';
import { CMS, Users } from '@o2s/configs.integrations';
import { Observable, forkJoin, map } from 'rxjs';

import { Models as ApiModels } from '@o2s/utils.api-harmonization';

import { Auth } from '@o2s/framework/modules';

import { mapUserAccount } from './user-account.mapper';
import { UserAccountBlock } from './user-account.model';
import { GetUserAccountBlockQuery } from './user-account.request';

@Injectable()
export class UserAccountService {
    constructor(
        private readonly cmsService: CMS.Service,
        private readonly usersService: Users.Service,
        private readonly authService: Auth.Service,
    ) {}

    getUserAccountBlock(
        query: GetUserAccountBlockQuery,
        headers: ApiModels.Headers.AppHeaders,
    ): Observable<UserAccountBlock> {
        const cms = this.cmsService.getUserAccountBlock({ id: query.id, locale: headers['x-locale'] });
        const user = this.usersService.getUser({ id: query.userId });
        return forkJoin([cms, user]).pipe(
            map(([cms, user]) => {
                const result = mapUserAccount(cms, headers['x-locale'], user);

                // Extract permissions using ACL service
                if (headers.authorization) {
                    const permissions = this.authService.canPerformActions(headers.authorization, 'users', [
                        'view',
                        'edit',
                    ]);

                    result.permissions = {
                        view: permissions.view ?? false,
                        edit: permissions.edit ?? false,
                    };
                } else {
                    // Default to allowing view if no authorization token
                    result.permissions = {
                        view: true,
                        edit: false,
                    };
                }

                return result;
            }),
        );
    }
}
