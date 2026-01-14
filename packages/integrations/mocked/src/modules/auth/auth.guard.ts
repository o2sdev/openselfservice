import { ExecutionContext, Inject, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import jwt from 'jsonwebtoken';

import { LoggerService } from '@o2s/utils.logger';

import { Auth } from '@o2s/framework/modules';

import { Jwt } from './auth.model';

@Injectable()
export class RolesGuard implements Auth.Guard {
    constructor(
        private readonly reflector: Reflector,
        @Inject(LoggerService) private readonly logger: LoggerService,
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

        const userPermissions = this.extractPermissionsAsStrings(decodedToken);

        this.logger.debug(MatchingMode, 'Role matching mode');
        this.logger.debug(userPermissions.join(','), 'User permissions');
        this.logger.debug(requiredRoles.join(','), 'Required roles');

        return MatchingMode === Auth.Model.MatchingMode.ALL
            ? requiredRoles.every((role) => userPermissions.includes(role))
            : requiredRoles.some((role) => userPermissions.includes(role));
    }

    /**
     * Extracts permissions as flat strings for role matching.
     * Converts Permission[] to strings like "invoices:view", "users:edit"
     */
    private extractPermissionsAsStrings(decodedToken: Jwt): string[] {
        const permissions = decodedToken?.permissions || decodedToken?.customer?.permissions || [];
        return this.flattenPermissions(permissions);
    }

    private flattenPermissions(permissions: Auth.Model.Permission[]): string[] {
        return permissions.flatMap((p) => p.actions.map((action) => `${p.resource}:${action}`));
    }
}
