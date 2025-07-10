import { UnauthorizedException } from '@nestjs/common';

import { Auth } from '@o2s/framework/modules';

export const checkPermissions = (permissions?: Auth.Constants.Roles[], userRoles?: Auth.Constants.Roles[]) => {
    if (permissions?.length && userRoles && !permissions?.some((role) => userRoles.includes(role))) {
        throw new UnauthorizedException();
    }
};

export const getHasAccess = (permissions?: Auth.Constants.Roles[], userRoles?: Auth.Constants.Roles[]) => {
    return !(permissions?.length && userRoles && !permissions?.some((role) => userRoles.includes(role)));
};
