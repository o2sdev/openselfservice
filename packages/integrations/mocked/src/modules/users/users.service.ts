import { NotImplementedException } from '@nestjs/common';
import { Observable, of } from 'rxjs';

import { Models, Users } from '@o2s/framework/modules';

import { mapCustomer, mapCustomers } from './customers.mapper';
import { mapUser } from './users.mapper';
import { responseDelay } from '@/utils/delay';

export class UserService implements Users.Service {
    getCurrentUser(): Observable<Users.Model.User | undefined> {
        return of(mapUser()).pipe(responseDelay());
    }

    getUser(options: Users.Request.GetUserParams): Observable<Users.Model.User | undefined> {
        return of(mapUser(options.id)).pipe(responseDelay());
    }

    updateCurrentUser(_body: Users.Request.PostUserBody): Observable<Users.Model.User | undefined> {
        return of(mapUser('3325325')).pipe(responseDelay());
    }

    updateUser(
        options: Users.Request.GetUserParams,
        _body: Users.Request.PostUserBody,
    ): Observable<Users.Model.User | undefined> {
        return of(mapUser(options.id)).pipe(responseDelay());
    }

    getCurrentUserCustomers(): Observable<Models.Customer.Customer[] | undefined> {
        return of(mapCustomers()).pipe(responseDelay());
    }

    getCurrentUserCustomer(options: Users.Request.GetCustomerParams): Observable<Models.Customer.Customer | undefined> {
        return of(mapCustomer(options.id === 'default' ? 'cust-002' : options.id)).pipe(responseDelay());
    }

    deleteUser(): Observable<void> {
        throw new NotImplementedException('Delete user method not implemented');
    }
}
