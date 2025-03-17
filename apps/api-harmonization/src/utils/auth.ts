import jwt from 'jsonwebtoken';

import { Auth } from '@o2s/framework/modules';

export const decodeAuthorizationToken = (authorization: string): Auth.Model.Jwt => {
    const accessToken = authorization.replace('Bearer ', '');
    return jwt.decode(accessToken) as Auth.Model.Jwt;
};

export const extractUserRolesFromJwt = (decodedToken: Auth.Model.Jwt): string[] => {
    const userRoles: string[] = [];
    userRoles.push(decodedToken?.role);
    if (decodedToken?.customer?.roles !== undefined) {
        userRoles.push(...decodedToken.customer.roles);
    }
    return userRoles;
};
