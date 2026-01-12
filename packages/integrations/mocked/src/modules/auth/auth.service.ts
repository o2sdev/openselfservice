import { Injectable } from '@nestjs/common';
import jwt from 'jsonwebtoken';

import { Auth, Models } from '@o2s/framework/modules';

import { Jwt } from './auth.model';

@Injectable()
export class AuthService extends Auth.Service {
    constructor() {
        super();
    }

    decodeAuthorizationToken(token: string): Jwt {
        const accessToken = token.replace('Bearer ', '');
        return jwt.decode(accessToken) as Jwt;
    }

    getCustomerId(token: string | Jwt): string | undefined {
        let decodedToken: Jwt;
        if (typeof token === 'string') {
            decodedToken = this.decodeAuthorizationToken(token);
        } else {
            decodedToken = token;
        }

        return decodedToken.customer?.id;
    }

    extractUserRoles(token?: string | Jwt): Auth.Constants.Roles[] {
        if (!token) {
            return [];
        }

        let decodedToken: Jwt;
        if (typeof token === 'string') {
            decodedToken = this.decodeAuthorizationToken(token);
        } else {
            decodedToken = token;
        }

        // Extract permissions and convert to role strings for legacy compatibility
        const permissions = decodedToken?.permissions || decodedToken?.customer?.permissions || [];
        const permissionStrings = this.flattenPermissions(permissions);

        // Filter to only return valid Auth.Constants.Roles values
        const validRoles = Object.values(Auth.Constants.Roles) as string[];
        return permissionStrings.filter((item) => validRoles.includes(item)) as Auth.Constants.Roles[];
    }

    /**
     * Get all permissions from the token
     */
    getPermissions(token?: string | Jwt): Models.Permission.Permission[] {
        if (!token) {
            return [];
        }

        let decodedToken: Jwt;
        if (typeof token === 'string') {
            decodedToken = this.decodeAuthorizationToken(token);
        } else {
            decodedToken = token;
        }

        return decodedToken?.permissions || decodedToken?.customer?.permissions || [];
    }

    private flattenPermissions(permissions: Models.Permission.Permission[]): string[] {
        return permissions.flatMap((p) => p.actions.map((action) => `${p.resource}:${action}`));
    }
}
