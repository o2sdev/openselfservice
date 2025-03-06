import * as Users from '.';
import { Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';

import { Customer } from '@/utils/models/customer';

@Injectable()
export abstract class UserService {
    protected constructor(..._services: unknown[]) {}

    abstract getCurrentUser(): Observable<Users.Model.User | undefined>;
    abstract getUser(options: Users.Request.GetUserParams): Observable<Users.Model.User | undefined>;
    abstract updateCurrentUser(body: Users.Request.PostUserBody): Observable<Users.Model.User | undefined>;
    abstract updateUser(
        options: Users.Request.GetUserParams,
        body: Users.Request.PostUserBody,
    ): Observable<Users.Model.User | undefined>;
    abstract getCurrentUserCustomers(): Observable<Customer[] | undefined>;
    abstract getCurrentUserCustomer(options: Users.Request.GetCustomerParams): Observable<Customer | undefined>;
    abstract deleteUser(): Observable<void>;
}
