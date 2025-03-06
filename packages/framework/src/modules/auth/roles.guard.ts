import { ExecutionContext, Inject, Injectable } from '@nestjs/common';
import { CanActivate } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { LoggerService } from '@o2s/utils.logger';
import jwt from 'jsonwebtoken';

import { RoleDecorator, RoleMatchingMode } from './roles.decorator';

interface Jwt extends jwt.JwtPayload {
    role: string;
    customer: {
        roles: string[];
    };
}

@Injectable()
export class RolesGuard implements CanActivate {
    constructor(
        private readonly reflector: Reflector,
        @Inject(LoggerService) private readonly logger: LoggerService,
    ) {}

    async canActivate(context: ExecutionContext): Promise<boolean> {
        const roleMetadata = this.reflector.getAllAndMerge<RoleDecorator>('roles', [
            context.getClass(),
            context.getHandler(),
        ]);
        const requiredRoles = roleMetadata.roles ?? [];
        if (requiredRoles.length === 0) {
            return true;
        }

        const roleMatchingMode = roleMetadata.mode || RoleMatchingMode.ANY;

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

        const granted =
            roleMatchingMode === RoleMatchingMode.ALL
                ? requiredRoles.every((role) => userRoles.includes(role))
                : requiredRoles.some((role) => userRoles.includes(role));
        return granted;
    }

    private getUserRoles(decodedToken: Jwt): string[] {
        const userRoles: string[] = [];
        userRoles.push(decodedToken?.role);
        decodedToken?.customer?.roles !== undefined && userRoles.push(...decodedToken?.customer?.roles);
        return userRoles;
    }
}
