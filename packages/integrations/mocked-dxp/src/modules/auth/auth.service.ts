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
            // For development: verify with a simple secret
            return jwt.verify(accessToken, process.env.AUTH_JWT_SECRET!) as Jwt;
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

    getCustomerId(token: string | Jwt): string | undefined {
        // Decode directly - already verified by guard
        const decodedToken = typeof token === 'string' ? (jwt.decode(token.replace('Bearer ', '')) as Jwt) : token;

        return decodedToken?.customer?.id;
    }

    getRoles(token?: string | Jwt): Auth.Model.Role[] {
        // Decode directly - already verified by guard
        const decodedToken = typeof token === 'string' ? (jwt.decode(token.replace('Bearer ', '')) as Jwt) : token;

        // Roles are stored directly in the JWT token
        return decodedToken?.customer?.roles || decodedToken?.roles || [];
    }

    getPermissions(token: string | Auth.Model.Jwt): Auth.Model.Permissions {
        // Decode directly - already verified by guard
        const decodedToken = typeof token === 'string' ? (jwt.decode(token.replace('Bearer ', '')) as Jwt) : token;

        // Permissions are stored directly in the JWT token
        return decodedToken?.customer?.permissions || decodedToken.permissions || {};
    }
}
