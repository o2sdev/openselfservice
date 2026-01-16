import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';

@Injectable()
export abstract class RoleGuard implements CanActivate {
    protected constructor(..._services: unknown[]) {}

    abstract canActivate(context: ExecutionContext): Promise<boolean>;
}

@Injectable()
export abstract class PermissionGuard implements CanActivate {
    protected constructor(..._services: unknown[]) {}

    abstract canActivate(context: ExecutionContext): Promise<boolean>;
}
