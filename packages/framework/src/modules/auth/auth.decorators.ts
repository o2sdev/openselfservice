import { CustomDecorator, SetMetadata } from '@nestjs/common';

import { MatchingMode } from './auth.model';

export interface RoleDecorator {
    roles: string[];
    mode?: MatchingMode;
}

export interface PermissionsDecorator {
    resource: string;
    actions: string[];
    mode?: MatchingMode;
}

export const Roles = (metadata: RoleDecorator): CustomDecorator => {
    return SetMetadata('roles', metadata);
};

export const Permissions = (metadata: PermissionsDecorator): CustomDecorator => {
    return SetMetadata('permissions', metadata);
};
