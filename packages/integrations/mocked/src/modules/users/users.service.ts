import { BadRequestException, NotImplementedException } from '@nestjs/common';
import { Observable, of } from 'rxjs';

import { Models, Users } from '@o2s/framework/modules';

import { responseDelay } from '@/utils/delay';

import { mapCustomer, mapCustomers } from './customers.mapper';
import { MOCK_USERS, mapUser } from './users.mapper';

export class UserService implements Users.Service {
    getCurrentUser(): Observable<Users.Model.User> {
        return of(mapUser()).pipe(responseDelay());
    }

    getUser(options: Users.Request.GetUserParams): Observable<Users.Model.User> {
        return of(mapUser(options.id)).pipe(responseDelay());
    }

    createUser(body: Users.Request.PostUserBody): Observable<Users.Model.User> {
        if (!body.email) {
            throw new BadRequestException();
        }

        const user = MOCK_USERS.find((u) => u.email === body.email);
        return of(mapUser(user?.id));
    }

    deleteUser(): Observable<void> {
        throw new NotImplementedException();
    }

    resetPassword(body: Users.Request.ResetPasswordBody): Observable<void> {
        if (!body.username) {
            throw new BadRequestException();
        }

        return of(undefined);
    }

    setNewPassword(body: Users.Request.SetNewPasswordBody): Observable<void> {
        if (!body.password) {
            throw new BadRequestException();
        }

        return of(undefined);
    }

    updateCurrentUser(_body: Users.Request.PatchUserBody): Observable<Users.Model.User> {
        return of(mapUser()).pipe(responseDelay());
    }

    updateUser(options: Users.Request.GetUserParams, _body: Users.Request.PatchUserBody): Observable<Users.Model.User> {
        return of(mapUser(options.id)).pipe(responseDelay());
    }

    getCurrentUserCustomers(): Observable<Models.Customer.Customer[]> {
        return of(mapCustomers()).pipe(responseDelay());
    }

    getCurrentUserCustomer(options: Users.Request.GetCustomerParams): Observable<Models.Customer.Customer> {
        return of(mapCustomer(options.id)).pipe(responseDelay());
    }
}
