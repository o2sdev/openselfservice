import { Injectable } from '@nestjs/common';
import jwt from 'jsonwebtoken';

import { Auth } from '@o2s/framework/modules';

import { Jwt } from './auth.model';

@Injectable()
export class AuthService implements Auth.Service {
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

    extractUserRoles(token: string | Jwt): string[] {
        let decodedToken: Jwt;
        if (typeof token === 'string') {
            decodedToken = this.decodeAuthorizationToken(token);
        } else {
            decodedToken = token;
        }

        const userRoles: string[] = [];

        if (decodedToken?.role) {
            userRoles.push(decodedToken.role);
        }

        if (Array.isArray(decodedToken?.customer?.roles)) {
            userRoles.push(...decodedToken.customer.roles);
        }

        return userRoles;
    }
}
