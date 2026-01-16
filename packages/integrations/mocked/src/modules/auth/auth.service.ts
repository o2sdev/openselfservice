import { Injectable, UnauthorizedException } from '@nestjs/common';
import jwt from 'jsonwebtoken';

import { Auth } from '@o2s/framework/modules';

import { Jwt } from './auth.model';

@Injectable()
export class AuthService extends Auth.Service {
    constructor() {
        super();
    }

    async verifyToken(token: string): Promise<Jwt> {
        const accessToken = token.replace('Bearer ', '');

        try {
            // For development: verify with simple secret
            return jwt.verify(accessToken, process.env.AUTH_JWT_SECRET || 'secret') as Jwt;
        } catch (error) {
            if (error instanceof jwt.TokenExpiredError) {
                throw new UnauthorizedException('Token expired');
            }
            if (error instanceof jwt.JsonWebTokenError) {
                throw new UnauthorizedException('Invalid token');
            }
            throw new UnauthorizedException('Token verification failed');
        }
    }

    async isTokenRevoked(_jti: string): Promise<boolean> {
        // Mocked implementation: no revocation support
        return false;
    }

    getCustomerId(token: string): string | undefined {
        // Decode directly - already verified by guard
        const decodedToken = jwt.decode(token.replace('Bearer ', '')) as Jwt;
        return decodedToken.customer?.id;
    }

    getUserRoles(token?: string | Jwt): Auth.Model.Role[] {
        if (!token) {
            return [];
        }

        let decodedToken: Jwt;
        if (typeof token === 'string') {
            // Decode directly - already verified by guard
            decodedToken = jwt.decode(token.replace('Bearer ', '')) as Jwt;
        } else {
            decodedToken = token;
        }

        // Roles are now stored directly in the JWT token
        return decodedToken?.roles || decodedToken?.customer?.roles || [];
    }

    getPermissions(token: string | Auth.Model.Jwt): Auth.Model.Permissions {
        let decodedToken: Jwt;

        if (typeof token === 'string') {
            // Decode directly - already verified by guard
            decodedToken = jwt.decode(token.replace('Bearer ', '')) as Jwt;
        } else {
            decodedToken = token as Jwt;
        }

        // Permissions are now stored directly as Permission[] in the JWT
        return decodedToken?.customer?.permissions || decodedToken.permissions || {};
    }

    hasPermission(token: string | Auth.Model.Jwt, resource: string, action: string): boolean {
        const permissions = this.getPermissions(token);
        const resourcePermissions = permissions[resource];

        if (!resourcePermissions) {
            return false;
        }

        return resourcePermissions.actions.includes(action);
    }
}
