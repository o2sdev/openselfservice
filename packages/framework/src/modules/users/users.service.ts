import * as Users from '.';
import { Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';

import { Customer } from '@/utils/models/customer';

/**
 * Abstract user service. Implementation is provided by API Harmonization. All methods return RxJS {@link Observable}.
 */
@Injectable()
export abstract class UserService {
    protected constructor(..._services: unknown[]) {}

    /** Current authenticated user. */
    abstract getCurrentUser(authorization?: string): Observable<Users.Model.User | undefined>;
    /** User by id. */
    abstract getUser(
        options: Users.Request.GetUserParams,
        authorization?: string,
    ): Observable<Users.Model.User | undefined>;
    /** User list with optional username filter. */
    abstract getUsers(options: Users.Request.GetUsersQuery, authorization?: string): Observable<Users.Model.Users>;
    /** Update current user. */
    abstract updateCurrentUser(
        body: Users.Request.PostUserBody,
        authorization?: string,
    ): Observable<Users.Model.User | undefined>;
    /** Update user by id. */
    abstract updateUser(
        options: Users.Request.GetUserParams,
        body: Users.Request.PostUserBody,
        authorization?: string,
    ): Observable<Users.Model.User | undefined>;
    /** Current user's customers. */
    abstract getCurrentUserCustomers(authorization?: string): Observable<Customer[] | undefined>;
    /** Current user's customer by id. */
    abstract getCurrentUserCustomer(
        options: Users.Request.GetCustomerParams,
        authorization?: string,
    ): Observable<Customer | undefined>;
    /** Delete current user. */
    abstract deleteCurrentUser(authorization?: string): Observable<void>;
    /** Delete user by id. */
    abstract deleteUser(options: Users.Request.GetUserParams, authorization?: string): Observable<void>;
}
