import * as Auth from '.';
import { Injectable } from '@nestjs/common';

import { Models } from '@o2s/framework/modules';

@Injectable()
export abstract class AuthService {
    protected constructor(..._services: unknown[]) {}

    abstract decodeAuthorizationToken(token: string): Auth.Model.Jwt;
    abstract getCustomerId(token: string): string | undefined;

    /**
     * @deprecated Use getPermissions() for permission-based access control
     */
    abstract extractUserRoles(token?: string | Auth.Model.Jwt): Auth.Constants.Roles[];

    /**
     * Get all permissions from the token
     * @param token - JWT token string or decoded JWT object
     * @returns Array of normalized Permission objects
     */
    abstract getPermissions(token?: string | Auth.Model.Jwt): Models.Permission.Permission[];
}
