import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { Reflector } from '@nestjs/core';

import { PermissionsDecorator } from '../auth.decorators';
import { Jwt } from '../auth.model';
import { AuthService } from '../auth.service';

/**
 * Guard that enforces permission-based access control.
 *
 * - Verifies token signature and expiration
 * - Checks if token is revoked
 * - Validates user has required permissions
 *
 * AuthService is required (no optional fallback).
 */
@Injectable()
export class PermissionsGuard implements CanActivate {
    constructor(
        private readonly reflector: Reflector,
        private readonly authService: AuthService, // REQUIRED - no @Optional()
    ) {}

    async canActivate(context: ExecutionContext): Promise<boolean> {
        const permissionsMetadata = this.reflector.getAllAndMerge<PermissionsDecorator>('permissions', [
            context.getClass(),
            context.getHandler(),
        ]);

        // No permissions metadata = public endpoint
        if (!permissionsMetadata || !permissionsMetadata.resource || !permissionsMetadata.actions?.length) {
            return true;
        }

        const request = context.switchToHttp().getRequest();
        const authHeader = request.headers['authorization'];

        if (!authHeader) {
            throw new UnauthorizedException('Missing authorization token');
        }

        // Verify token (signature, expiration, standard claims)
        let verifiedToken: Jwt;
        try {
            verifiedToken = await this.authService.verifyToken(authHeader);
        } catch (_error) {
            // Don't expose verification details to client
            throw new UnauthorizedException('Invalid or expired token');
        }

        // Check if token is revoked
        if (verifiedToken.jti) {
            const isRevoked = await this.authService.isTokenRevoked(verifiedToken.jti);
            if (isRevoked) {
                throw new UnauthorizedException('Token has been revoked');
            }
        }

        // Validate permissions based on mode
        const { resource, actions, mode = 'all' } = permissionsMetadata;

        if (mode === 'all') {
            // User must have ALL specified actions
            const hasAll = actions.every((action) => this.authService.hasPermission(verifiedToken, resource, action));

            if (!hasAll) {
                throw new UnauthorizedException(`Missing required permissions: ${resource}:${actions.join(',')}`);
            }
        } else {
            // User must have AT LEAST ONE action
            const hasAny = actions.some((action) => this.authService.hasPermission(verifiedToken, resource, action));

            if (!hasAny) {
                throw new UnauthorizedException(`Missing at least one permission: ${resource}:${actions.join(',')}`);
            }
        }

        return true;
    }
}
