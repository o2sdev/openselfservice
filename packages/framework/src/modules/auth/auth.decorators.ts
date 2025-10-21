import { CustomDecorator, SetMetadata } from '@nestjs/common';

import { RoleMatchingMode } from './auth.constants';

export interface RoleDecorator {
    roles: string[];
    mode?: RoleMatchingMode;
}

export const Roles = (roleMetadata: RoleDecorator): CustomDecorator<string> => {
    return SetMetadata('roles', roleMetadata);
};
