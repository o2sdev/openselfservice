import jwt from 'jsonwebtoken';

import { Auth } from '@o2s/framework/modules';

export const decodeAuthorizationToken = (authorization: string): Auth.Models.Jwt => {
    const accessToken = authorization.replace('Bearer ', '');
    return jwt.decode(accessToken) as Auth.Models.Jwt;
};

export const extractUserRolesFromJwt = (decodedToken: Auth.Models.Jwt): string[] => {
    const userRoles: string[] = [];
    userRoles.push(decodedToken?.role);
    if (decodedToken?.customer?.roles !== undefined) {
        userRoles.push(...decodedToken.customer.roles);
    }
    return userRoles;
};
