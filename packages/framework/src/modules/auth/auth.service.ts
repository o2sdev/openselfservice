import * as Auth from '.';
import { Injectable } from '@nestjs/common';

@Injectable()
export abstract class AuthService {
    protected constructor(..._services: unknown[]) {}

    abstract decodeAuthorizationToken(token: string): Auth.Model.Jwt;
    abstract getCustomerId(token: string): string | undefined;
    abstract extractUserRoles(token?: string | Auth.Model.Jwt): Auth.Constants.Roles[];
}
