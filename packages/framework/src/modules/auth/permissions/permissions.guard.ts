import { CanActivate, ExecutionContext, Injectable, Optional, UnauthorizedException } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import jwt from 'jsonwebtoken';

import { PermissionsDecorator } from '../auth.decorators';
import { Jwt } from '../auth.model';

import { PermissionsService } from './permissions.service';

@Injectable()
export class PermissionsGuard implements CanActivate {
    constructor(
        private readonly reflector: Reflector,
        @Optional() private readonly permissionsService?: PermissionsService,
    ) {}

    async canActivate(context: ExecutionContext): Promise<boolean> {
        // If Permissions service is not configured, allow access (backward compatibility)
        if (!this.permissionsService) {
            return true;
        }

        const permissionsMetadata = this.reflector.getAllAndMerge<PermissionsDecorator>('permissions', [
            context.getClass(),
            context.getHandler(),
        ]);

        // If no permissions metadata is present, allow access (backward compatibility)
        if (!permissionsMetadata || !permissionsMetadata.resource || !permissionsMetadata.actions?.length) {
            return true;
        }

        const request = context.switchToHttp().getRequest();
        const accessToken = request.headers['authorization']?.replace('Bearer ', '');

        if (!accessToken) {
            throw new UnauthorizedException('Missing authorization token');
        }

        const decodedToken = jwt.decode(accessToken) as Jwt | null;

        if (!decodedToken) {
            throw new UnauthorizedException('Invalid authorization token');
        }

        const mode = permissionsMetadata.mode || 'all';
        const actions = permissionsMetadata.actions;

        if (mode === 'all') {
            // User must have all actions
            const hasAllPermissions = actions.every((action) =>
                this.permissionsService!.hasPermission(decodedToken, permissionsMetadata.resource, action),
            );

            if (!hasAllPermissions) {
                throw new UnauthorizedException(
                    `Access denied: missing required permissions for resource '${permissionsMetadata.resource}' and actions [${actions.join(', ')}]`,
                );
            }
        } else {
            // User must have at least one action (mode === 'any')
            const hasAnyPermission = actions.some((action) =>
                this.permissionsService!.hasPermission(decodedToken, permissionsMetadata.resource, action),
            );

            if (!hasAnyPermission) {
                throw new UnauthorizedException(
                    `Access denied: missing at least one permission for resource '${permissionsMetadata.resource}' and actions [${actions.join(', ')}]`,
                );
            }
        }

        return true;
    }
}
