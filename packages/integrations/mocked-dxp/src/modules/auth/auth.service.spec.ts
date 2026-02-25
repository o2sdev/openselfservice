import { UnauthorizedException } from '@nestjs/common';
import jwt from 'jsonwebtoken';
import { beforeEach, describe, expect, it, vi } from 'vitest';

import { Jwt } from './auth.model';
import { AuthService } from './auth.service';

describe('AuthService', () => {
    let service: AuthService;

    beforeEach(() => {
        service = new AuthService();
        process.env.AUTH_JWT_SECRET = 'test-secret';
        vi.restoreAllMocks();
    });

    describe('verifyToken', () => {
        it('should verify valid token and return decoded payload', async () => {
            const mockPayload = { sub: 'user-1' };

            vi.spyOn(jwt, 'verify').mockImplementation(() => mockPayload);

            const result = await service.verifyToken('Bearer valid-token');

            expect(jwt.verify).toHaveBeenCalledWith('valid-token', 'test-secret');
            expect(result).toEqual(mockPayload);
        });

        it('should throw UnauthorizedException on token expiration', async () => {
            vi.spyOn(jwt, 'verify').mockImplementation(() => {
                throw new jwt.TokenExpiredError('expired', new Date());
            });

            await expect(service.verifyToken('Bearer expired-token')).rejects.toThrow(
                new UnauthorizedException('Token expired'),
            );
        });

        it('should throw UnauthorizedException on invalid token', async () => {
            vi.spyOn(jwt, 'verify').mockImplementation(() => {
                throw new jwt.JsonWebTokenError('invalid');
            });

            await expect(service.verifyToken('Bearer invalid-token')).rejects.toThrow(
                new UnauthorizedException('Invalid token'),
            );
        });

        it('should throw UnauthorizedException on other verification errors', async () => {
            vi.spyOn(jwt, 'verify').mockImplementation(() => {
                throw new Error('unknown error');
            });

            await expect(service.verifyToken('Bearer bad-token')).rejects.toThrow(
                new UnauthorizedException('Token verification failed'),
            );
        });
    });

    describe('isTokenRevoked', () => {
        it('should always return false for mocked implementation', async () => {
            const result = await service.isTokenRevoked('any-jti');
            expect(result).toBe(false);
        });
    });

    describe('getCustomerId', () => {
        it('should extract customer id from token string', () => {
            const mockDecoded = { customer: { id: 'cust-1' } };

            vi.spyOn(jwt, 'decode').mockImplementation(() => mockDecoded);

            const result = service.getCustomerId('Bearer token');

            expect(jwt.decode).toHaveBeenCalledWith('token');
            expect(result).toBe('cust-1');
        });

        it('should extract customer id from decoded token object', () => {
            const mockDecoded = { customer: { id: 'cust-1' } } as Jwt;
            const result = service.getCustomerId(mockDecoded);
            expect(result).toBe('cust-1');
        });
    });

    describe('getRoles', () => {
        it('should extract roles from customer object in token', () => {
            const mockDecoded = { customer: { roles: ['admin'] } };

            vi.spyOn(jwt, 'decode').mockImplementation(() => mockDecoded);

            const result = service.getRoles('Bearer token');

            expect(result).toEqual(['admin']);
        });

        it('should extract roles from root of token', () => {
            const mockDecoded = { roles: ['user'] };

            vi.spyOn(jwt, 'decode').mockImplementation(() => mockDecoded);

            const result = service.getRoles('Bearer token');

            expect(result).toEqual(['user']);
        });

        it('should return empty array if no roles found', () => {
            vi.spyOn(jwt, 'decode').mockImplementation(() => ({}));
            const result = service.getRoles('Bearer token');
            expect(result).toEqual([]);
        });
    });

    describe('getPermissions', () => {
        it('should extract permissions from customer object in token', () => {
            const mockPermissions = { resource: { actions: ['read'] } };
            const mockDecoded = { customer: { permissions: mockPermissions } };

            vi.spyOn(jwt, 'decode').mockImplementation(() => mockDecoded);

            const result = service.getPermissions('Bearer token');

            expect(result).toEqual(mockPermissions);
        });

        it('should extract permissions from root of token', () => {
            const mockPermissions = { resource: { actions: ['write'] } };
            const mockDecoded = { permissions: mockPermissions };

            vi.spyOn(jwt, 'decode').mockImplementation(() => mockDecoded);

            const result = service.getPermissions('Bearer token');

            expect(result).toEqual(mockPermissions);
        });

        it('should return empty object if no permissions found', () => {
            vi.spyOn(jwt, 'decode').mockImplementation(() => ({}));
            const result = service.getPermissions('Bearer token');
            expect(result).toEqual({});
        });
    });
});
