import { CustomDecorator, SetMetadata, UseGuards, applyDecorators } from '@nestjs/common';

import { MatchingMode } from './auth.model';
import { PermissionsGuard } from './permissions/permissions.guard';

export interface RoleDecorator {
    roles: string[];
    mode?: MatchingMode;
}

export interface PermissionsDecorator {
    resource: string;
    actions: string[];
    mode?: 'any' | 'all';
}

export const Roles = (roleMetadata: RoleDecorator): CustomDecorator<string> => {
    return SetMetadata('roles', roleMetadata);
};

export const Permissions = (permissionsMetadata: PermissionsDecorator): ReturnType<typeof applyDecorators> => {
    return applyDecorators(SetMetadata('permissions', permissionsMetadata), UseGuards(PermissionsGuard));
};
