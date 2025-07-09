import * as Users from '.';
import { Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';

import { Customer } from '@/utils/models/customer';

@Injectable()
export abstract class UserService {
    protected constructor(..._services: unknown[]) {}

    abstract getCurrentUser(authorization?: string): Observable<Users.Model.User | undefined>;
    abstract getUser(
        options: Users.Request.GetUserParams,
        authorization?: string,
    ): Observable<Users.Model.User | undefined>;
    abstract getUsers(options: Users.Request.GetUsersQuery, authorization?: string): Observable<Users.Model.Users>;
    abstract updateCurrentUser(
        body: Users.Request.PostUserBody,
        authorization?: string,
    ): Observable<Users.Model.User | undefined>;
    abstract updateUser(
        options: Users.Request.GetUserParams,
        body: Users.Request.PostUserBody,
        authorization?: string,
    ): Observable<Users.Model.User | undefined>;
    abstract getCurrentUserCustomers(authorization?: string): Observable<Customer[] | undefined>;
    abstract getCurrentUserCustomer(
        options: Users.Request.GetCustomerParams,
        authorization?: string,
    ): Observable<Customer | undefined>;
    abstract deleteCurrentUser(authorization?: string): Observable<void>;
    abstract deleteUser(options: Users.Request.GetUserParams, authorization?: string): Observable<void>;
}
