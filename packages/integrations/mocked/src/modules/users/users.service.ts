import { Injectable, NotImplementedException } from '@nestjs/common';
import { Observable, of } from 'rxjs';

import { Models, Users } from '@o2s/framework/modules';

import { mapCustomer, mapCustomers } from './customers.mapper';
import { mapUser, mapUsers } from './users.mapper';
import { responseDelay } from '@/utils/delay';

@Injectable()
export class UserService extends Users.Service {
    constructor() {
        super();
    }

    getCurrentUser(_authentication?: string): Observable<Users.Model.User | undefined> {
        return of(mapUser()).pipe(responseDelay());
    }

    getUser(options: Users.Request.GetUserParams, _authentication?: string): Observable<Users.Model.User | undefined> {
        return of(mapUser(options.id)).pipe(responseDelay());
    }

    getUsers(options: Users.Request.GetUsersQuery, _authentication?: string): Observable<Users.Model.Users> {
        return of(mapUsers(options)).pipe(responseDelay());
    }

    updateCurrentUser(
        _body: Users.Request.PostUserBody,
        _authentication?: string,
    ): Observable<Users.Model.User | undefined> {
        return of(mapUser('3325325')).pipe(responseDelay());
    }

    updateUser(
        options: Users.Request.GetUserParams,
        _body: Users.Request.PostUserBody,
        _authentication?: string,
    ): Observable<Users.Model.User | undefined> {
        return of(mapUser(options.id)).pipe(responseDelay());
    }

    getCurrentUserCustomers(_authentication?: string): Observable<Models.Customer.Customer[] | undefined> {
        return of(mapCustomers()).pipe(responseDelay());
    }

    getCurrentUserCustomer(
        options: Users.Request.GetCustomerParams,
        _authentication?: string,
    ): Observable<Models.Customer.Customer | undefined> {
        return of(mapCustomer(options.id)).pipe(responseDelay());
    }

    deleteCurrentUser(_authentication?: string): Observable<void> {
        throw new NotImplementedException('Delete current user method not implemented');
    }

    deleteUser(_options: Users.Request.GetUserParams, _authentication?: string): Observable<void> {
        throw new NotImplementedException('Delete user method not implemented');
    }
}
