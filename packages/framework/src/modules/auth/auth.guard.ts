import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';

@Injectable()
export abstract class AuthGuard implements CanActivate {
    protected constructor(..._services: unknown[]) {}

    abstract canActivate(context: ExecutionContext): Promise<boolean>;
}
