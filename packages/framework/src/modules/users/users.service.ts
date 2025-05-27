import * as Users from '.';
import { Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';

import { Customer } from '@/utils/models/customer';

@Injectable()
export abstract class UserService {
    protected constructor(..._services: unknown[]) {}

    abstract getCurrentUser(): Observable<Users.Model.User>;

    abstract getUser(options: Users.Request.GetUserParams): Observable<Users.Model.User>;
    abstract getUsers(options: Users.Request.GetUsersQuery): Observable<Users.Model.Users>;

    abstract createUser(options: Users.Request.PostUserBody): Observable<Users.Model.User>;
    abstract deleteUser(): Observable<void>;

    abstract resetPassword(body: Users.Request.ResetPasswordBody): Observable<void>;
    abstract setNewPassword(body: Users.Request.SetNewPasswordBody): Observable<void>;

    abstract updateCurrentUser(body: Users.Request.PatchUserBody): Observable<Users.Model.User>;
    abstract updateUser(
        options: Users.Request.GetUserParams,
        body: Users.Request.PatchUserBody,
    ): Observable<Users.Model.User>;

    abstract getCurrentUserCustomers(): Observable<Customer[]>;
    abstract getCurrentUserCustomer(options: Users.Request.GetCustomerParams): Observable<Customer>;
}
