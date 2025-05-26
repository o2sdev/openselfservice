import { Injectable } from '@nestjs/common';
import { Observable, map, of } from 'rxjs';
import { RegisterUser, ResetPassword, SetPassword } from 'src/modules/users/users.model';

import { CMS, Users } from '@o2s/api-harmonization/models/index';

import { AppHeaders } from '@o2s/api-harmonization/utils/headers';

import { RegisterUserBody, ResetPasswordBody, SetNewPasswordBody } from './users.request';

@Injectable()
export class UsersService {
    constructor(
        private readonly cmsService: CMS.Service,
        private readonly usersService: Users.Service,
    ) {}

    registerUser(body: RegisterUserBody, _headers: AppHeaders): Observable<RegisterUser> {
        return this.usersService.createUser(body).pipe(
            map((_user) => {
                return of({});
            }),
        );
    }

    resetPassword(body: ResetPasswordBody, _headers: AppHeaders): Observable<ResetPassword> {
        return this.usersService.resetPassword(body).pipe(
            map(() => {
                return of({});
            }),
        );
    }

    setNewPassword(body: SetNewPasswordBody, _headers: AppHeaders): Observable<SetPassword> {
        return this.usersService.setNewPassword(body).pipe(
            map(() => {
                return of({});
            }),
        );
    }
}
