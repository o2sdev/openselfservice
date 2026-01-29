import { UnauthorizedException } from '@nestjs/common';
import { describe, expect, it } from 'vitest';

import * as Auth from './';
import { AuthService } from './auth.service';

// Concrete implementation for testing abstract class
class TestAuthService extends AuthService {
    constructor(props?: unknown) {
        super(props);
    }

    verifyToken(_token: string): Promise<Auth.Model.Jwt> {
        throw new Error('Method not implemented.');
    }
    isTokenRevoked(_jti: string): Promise<boolean> {
        throw new Error('Method not implemented.');
    }
    getCustomerId(_token: string | Auth.Model.Jwt): string | undefined {
        throw new Error('Method not implemented.');
    }
    getRoles(_token?: string | Auth.Model.Jwt): Auth.Model.Role[] {
        throw new Error('Method not implemented.');
    }
    getPermissions(_token: string | Auth.Model.Jwt): Auth.Model.Permissions {
        return {
            invoices: {
                resource: 'invoices',
                actions: ['view', 'pay'],
            },
        };
    }
}

describe('AuthService', () => {
    const service = new TestAuthService();

    describe('hasRole', () => {
        it('should return true if no roles are required', () => {
            expect(AuthService.hasRole([], ['user'])).toBe(true);
            expect(AuthService.hasRole(undefined, ['user'])).toBe(true);
        });

        it('should return false if roles are required but user has none', () => {
            expect(AuthService.hasRole(['admin'], [])).toBe(false);
            expect(AuthService.hasRole(['admin'], undefined)).toBe(false);
        });

        it('should return true if user has at least one required role', () => {
            expect(AuthService.hasRole(['admin', 'user'], ['user'])).toBe(true);
            expect(AuthService.hasRole(['admin', 'user'], ['admin'])).toBe(true);
            expect(AuthService.hasRole(['admin'], ['admin', 'superadmin'])).toBe(true);
        });

        it('should return false if user has none of the required roles', () => {
            expect(AuthService.hasRole(['admin'], ['user'])).toBe(false);
        });
    });

    describe('requireRoles', () => {
        it('should not throw if no roles are required', () => {
            expect(() => AuthService.requireRoles([], ['user'])).not.toThrow();
            expect(() => AuthService.requireRoles(undefined, ['user'])).not.toThrow();
        });

        it('should throw UnauthorizedException if roles are required but user has none', () => {
            expect(() => AuthService.requireRoles(['admin'], [])).toThrow(UnauthorizedException);
            expect(() => AuthService.requireRoles(['admin'], undefined)).toThrow(UnauthorizedException);
        });

        it('should not throw if user has at least one required role', () => {
            expect(() => AuthService.requireRoles(['admin', 'user'], ['user'])).not.toThrow();
        });

        it('should throw UnauthorizedException if user has none of the required roles', () => {
            expect(() => AuthService.requireRoles(['admin'], ['user'])).toThrow(UnauthorizedException);
        });
    });

    describe('hasPermission', () => {
        const permissions: Auth.Model.Permissions = {
            invoices: {
                resource: 'invoices',
                actions: ['view', 'pay'],
            },
        };

        it('should return true if user has permission for resource and action', () => {
            expect(service.hasPermission(permissions, 'invoices', 'view')).toBe(true);
            expect(service.hasPermission(permissions, 'invoices', 'pay')).toBe(true);
        });

        it('should return false if resource does not exist in permissions', () => {
            expect(service.hasPermission(permissions, 'orders', 'view')).toBe(false);
        });

        it('should return false if action does not exist in resource permissions', () => {
            expect(service.hasPermission(permissions, 'invoices', 'delete')).toBe(false);
        });
    });

    describe('canPerformActions', () => {
        it('should return map of actions and their permission status', () => {
            const result = service.canPerformActions('mock-token', 'invoices', ['view', 'delete', 'pay']);
            expect(result).toEqual({
                view: true,
                delete: false,
                pay: true,
            });
        });
    });
});
