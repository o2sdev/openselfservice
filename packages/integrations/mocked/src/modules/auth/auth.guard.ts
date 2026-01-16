import { ExecutionContext, Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import jwt from 'jsonwebtoken';

import { LoggerService } from '@o2s/utils.logger';

import { Auth } from '@o2s/framework/modules';

import { Jwt } from './auth.model';

@Injectable()
export class RolesGuard implements Auth.Guards.RoleGuard {
    constructor(
        private readonly reflector: Reflector,
        @Inject(LoggerService) private readonly logger: LoggerService,
        @Inject(Auth.Service) private readonly authService: Auth.Service,
    ) {}

    async canActivate(context: ExecutionContext): Promise<boolean> {
        const roleMetadata = this.reflector.getAllAndMerge<Auth.Decorators.RoleDecorator>('roles', [
            context.getClass(),
            context.getHandler(),
        ]);
        const requiredRoles = roleMetadata.roles ?? [];
        if (requiredRoles.length === 0) {
            return true;
        }

        const MatchingMode = roleMetadata.mode || Auth.Model.MatchingMode.ANY;

        const request = context.switchToHttp().getRequest();
        const accessToken = request.headers['authorization']?.replace('Bearer ', '');
        const decodedToken = jwt.decode(accessToken) as Jwt | null;

        if (!decodedToken) {
            return false;
        }

        const userRoles = this.extractPermissionsAsStrings(decodedToken);

        console.log('role guard', decodedToken, { requiredRoles, userRoles });

        this.logger.debug(MatchingMode, 'Role matching mode');
        this.logger.debug(userRoles.join(','), 'User roles');
        this.logger.debug(requiredRoles.join(','), 'Required roles');

        return MatchingMode === Auth.Model.MatchingMode.ALL
            ? requiredRoles.every((role) => userRoles.includes(role))
            : requiredRoles.some((role) => userRoles.includes(role));
    }

    /**
     * Extracts permissions as flat strings for role matching.
     * Converts Permission[] to strings like "invoices:view", "users:edit"
     */
    private extractPermissionsAsStrings(decodedToken: Jwt): string[] {
        const permissions = decodedToken?.customer?.permissions || decodedToken?.permissions || {};
        return this.flattenPermissions(permissions);
    }

    private flattenPermissions(permissions: Auth.Model.Permissions): string[] {
        return Object.entries(permissions).flatMap(([resource, permission]) =>
            permission.actions.map((action) => `${resource}:${action}`),
        );
    }
}

@Injectable()
export class PermissionsGuard implements Auth.Guards.PermissionGuard {
    constructor(
        private readonly reflector: Reflector,
        @Inject(LoggerService) private readonly logger: LoggerService,
        @Inject(Auth.Service) private readonly authService: Auth.Service,
    ) {}

    async canActivate(context: ExecutionContext): Promise<boolean> {
        const permissionsMetadata = this.reflector.getAllAndMerge<Auth.Decorators.PermissionsDecorator>('permissions', [
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

        console.log('permissions guard', verifiedToken, { resource, actions }, verifiedToken.permissions);

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
