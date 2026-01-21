import { ExecutionContext, Inject, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';

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

        const roleMatchingMode = roleMetadata.mode || Auth.Constants.RoleMatchingMode.ANY;

        const request = context.switchToHttp().getRequest();
        const accessToken = request.headers['authorization']?.replace('Bearer ', '');
        const decodedToken = jwt.decode(accessToken) as Jwt | null;

        if (!decodedToken) {
            return false;
        }

        const userRoles = this.getUserRoles(decodedToken);

        this.logger.debug(roleMatchingMode, 'Role matching mode');
        this.logger.debug(userRoles.join(','), 'User roles');
        this.logger.debug(requiredRoles.join(','), 'Required roles');

        return roleMatchingMode === Auth.Constants.RoleMatchingMode.ALL
            ? requiredRoles.every((role) => userRoles.includes(role))
            : requiredRoles.some((role) => userRoles.includes(role));
    }

    private getUserRoles(decodedToken: Jwt): string[] {
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
