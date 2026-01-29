import { ExecutionContext, UnauthorizedException } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import type { Request } from 'express';
import { beforeEach, describe, expect, it, vi } from 'vitest';

import { LoggerService } from '@o2s/utils.logger';

import { Auth } from '@o2s/framework/modules';

import { PermissionsGuard, RolesGuard } from './auth.guard';
import { AuthService } from './auth.service';

describe('Auth Guards', () => {
    let reflector: Reflector;
    let logger: LoggerService;
    let authService: AuthService;
    let context: ExecutionContext;
    let request: Request & { 'x-decoded-token': unknown };

    beforeEach(() => {
        reflector = {
            getAllAndMerge: vi.fn(),
        } as unknown as Reflector;
        logger = {
            debug: vi.fn(),
        } as unknown as LoggerService;
        authService = {
            verifyToken: vi.fn(),
            isTokenRevoked: vi.fn(),
            getRoles: vi.fn(),
            getPermissions: vi.fn(),
            hasPermission: vi.fn(),
        } as unknown as AuthService;
        request = {
            headers: {},
        } as Request & { 'x-decoded-token': unknown };
        context = {
            getClass: vi.fn(),
            getHandler: vi.fn(),
            switchToHttp: vi.fn().mockReturnValue({
                getRequest: vi.fn().mockReturnValue(request),
            }),
        } as unknown as ExecutionContext;
    });

    describe('RolesGuard', () => {
        let guard: RolesGuard;

        beforeEach(() => {
            guard = new RolesGuard(reflector, logger, authService);
        });

        it('should return true if no roles are required', async () => {
            vi.mocked(reflector.getAllAndMerge).mockReturnValue({ roles: [] });

            const result = await guard.canActivate(context);

            expect(result).toBe(true);
        });

        it('should throw UnauthorizedException if auth header is missing', async () => {
            vi.mocked(reflector.getAllAndMerge).mockReturnValue({ roles: ['admin'] });

            await expect(guard.canActivate(context)).rejects.toThrow(UnauthorizedException);
        });

        it('should throw UnauthorizedException if token verification fails', async () => {
            request.headers['authorization'] = 'Bearer invalid';

            vi.mocked(reflector.getAllAndMerge).mockReturnValue({ roles: ['admin'] });
            vi.mocked(authService.verifyToken).mockRejectedValue(new Error('Invalid token'));

            await expect(guard.canActivate(context)).rejects.toThrow(UnauthorizedException);
        });

        it('should throw UnauthorizedException if token is revoked', async () => {
            request.headers['authorization'] = 'Bearer valid';

            const mockToken = { jti: '123' };

            vi.mocked(reflector.getAllAndMerge).mockReturnValue({ roles: ['admin'] });
            vi.mocked(authService.verifyToken).mockResolvedValue(mockToken);
            vi.mocked(authService.isTokenRevoked).mockResolvedValue(true);

            await expect(guard.canActivate(context)).rejects.toThrow(UnauthorizedException);
        });

        it('should use existing verified token if present', async () => {
            request.headers['authorization'] = 'Bearer valid';
            request['x-decoded-token'] = { jti: '123' };

            vi.mocked(reflector.getAllAndMerge).mockReturnValue({ roles: ['admin'] });
            vi.mocked(authService.isTokenRevoked).mockResolvedValue(false);
            vi.mocked(authService.getRoles).mockReturnValue(['admin']);

            const result = await guard.canActivate(context);

            expect(authService.verifyToken).not.toHaveBeenCalled();
            expect(result).toBe(true);
        });

        it('should validate roles with ANY mode (default)', async () => {
            request.headers['authorization'] = 'Bearer valid';

            vi.mocked(reflector.getAllAndMerge).mockReturnValue({
                roles: ['admin', 'editor'],
                mode: Auth.Model.MatchingMode.ANY,
            });
            vi.mocked(authService.verifyToken).mockResolvedValue({});
            vi.mocked(authService.isTokenRevoked).mockResolvedValue(false);
            vi.mocked(authService.getRoles).mockReturnValue(['editor']);

            const result = await guard.canActivate(context);

            expect(result).toBe(true);
        });

        it('should fail validation with ANY mode if no roles match', async () => {
            request.headers['authorization'] = 'Bearer valid';

            vi.mocked(reflector.getAllAndMerge).mockReturnValue({ roles: ['admin', 'editor'] });
            vi.mocked(authService.verifyToken).mockResolvedValue({});
            vi.mocked(authService.isTokenRevoked).mockResolvedValue(false);
            vi.mocked(authService.getRoles).mockReturnValue(['user']);

            const result = await guard.canActivate(context);

            expect(result).toBe(false);
        });

        it('should validate roles with ALL mode', async () => {
            request.headers['authorization'] = 'Bearer valid';

            vi.mocked(reflector.getAllAndMerge).mockReturnValue({
                roles: ['admin', 'editor'],
                mode: Auth.Model.MatchingMode.ALL,
            });
            vi.mocked(authService.verifyToken).mockResolvedValue({});
            vi.mocked(authService.isTokenRevoked).mockResolvedValue(false);
            vi.mocked(authService.getRoles).mockReturnValue(['admin', 'editor', 'user']);

            const result = await guard.canActivate(context);

            expect(result).toBe(true);
        });

        it('should fail validation with ALL mode if not all roles match', async () => {
            request.headers['authorization'] = 'Bearer valid';

            vi.mocked(reflector.getAllAndMerge).mockReturnValue({
                roles: ['admin', 'editor'],
                mode: Auth.Model.MatchingMode.ALL,
            });
            vi.mocked(authService.verifyToken).mockResolvedValue({});
            vi.mocked(authService.isTokenRevoked).mockResolvedValue(false);
            vi.mocked(authService.getRoles).mockReturnValue(['admin']);

            const result = await guard.canActivate(context);

            expect(result).toBe(false);
        });
    });

    describe('PermissionsGuard', () => {
        let guard: PermissionsGuard;

        beforeEach(() => {
            guard = new PermissionsGuard(reflector, logger, authService);
        });

        it('should return true if no permissions are required', async () => {
            vi.mocked(reflector.getAllAndMerge).mockReturnValue({});

            const result = await guard.canActivate(context);

            expect(result).toBe(true);
        });

        it('should throw UnauthorizedException if auth header is missing', async () => {
            vi.mocked(reflector.getAllAndMerge).mockReturnValue({ resource: 'res', actions: ['read'] });

            await expect(guard.canActivate(context)).rejects.toThrow(UnauthorizedException);
        });

        it('should validate permissions with ALL mode (default)', async () => {
            request.headers['authorization'] = 'Bearer valid';

            vi.mocked(reflector.getAllAndMerge).mockReturnValue({
                resource: 'res',
                actions: ['read', 'write'],
                mode: 'all',
            });
            vi.mocked(authService.verifyToken).mockResolvedValue({});
            vi.mocked(authService.isTokenRevoked).mockResolvedValue(false);
            vi.mocked(authService.getPermissions).mockReturnValue({});
            // Mock hasPermission to return true for both calls
            vi.mocked(authService.hasPermission).mockReturnValue(true);

            const result = await guard.canActivate(context);

            expect(result).toBe(true);
            expect(authService.hasPermission).toHaveBeenCalledTimes(2);
        });

        it('should fail validation with ALL mode if one action is missing', async () => {
            request.headers['authorization'] = 'Bearer valid';

            vi.mocked(reflector.getAllAndMerge).mockReturnValue({ resource: 'res', actions: ['read', 'write'] });
            vi.mocked(authService.verifyToken).mockResolvedValue({});
            vi.mocked(authService.isTokenRevoked).mockResolvedValue(false);
            vi.mocked(authService.getPermissions).mockReturnValue({});

            // First call true, second false
            vi.mocked(authService.hasPermission).mockReturnValueOnce(true).mockReturnValueOnce(false);

            await expect(guard.canActivate(context)).rejects.toThrow(UnauthorizedException);
        });

        it('should validate permissions with ANY mode', async () => {
            request.headers['authorization'] = 'Bearer valid';

            vi.mocked(reflector.getAllAndMerge).mockReturnValue({
                resource: 'res',
                actions: ['read', 'write'],
                mode: 'any',
            });
            vi.mocked(authService.verifyToken).mockResolvedValue({});
            vi.mocked(authService.isTokenRevoked).mockResolvedValue(false);
            vi.mocked(authService.getPermissions).mockReturnValue({});

            // First call false, second true
            vi.mocked(authService.hasPermission).mockReturnValueOnce(false).mockReturnValueOnce(true);

            const result = await guard.canActivate(context);

            expect(result).toBe(true);
        });

        it('should fail validation with ANY mode if all actions are missing', async () => {
            request.headers['authorization'] = 'Bearer valid';

            vi.mocked(reflector.getAllAndMerge).mockReturnValue({
                resource: 'res',
                actions: ['read', 'write'],
                mode: 'any',
            });
            vi.mocked(authService.verifyToken).mockResolvedValue({});
            vi.mocked(authService.isTokenRevoked).mockResolvedValue(false);
            vi.mocked(authService.getPermissions).mockReturnValue({});

            vi.mocked(authService.hasPermission).mockReturnValue(false);

            await expect(guard.canActivate(context)).rejects.toThrow(UnauthorizedException);
        });
    });
});
