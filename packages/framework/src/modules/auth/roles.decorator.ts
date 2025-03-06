import { CustomDecorator } from '@nestjs/common';
import { SetMetadata } from '@nestjs/common';

export interface RoleDecorator {
    roles: string[];
    mode?: RoleMatchingMode;
}

export enum RoleMatchingMode {
    ALL = 'all',
    ANY = 'any',
}

export const Roles = (roleMetadata: RoleDecorator): CustomDecorator<string> => {
    return SetMetadata('roles', roleMetadata);
};
