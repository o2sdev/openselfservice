import jwt from 'jsonwebtoken';

import { Auth } from '@o2s/framework/modules';

export const decodeAuthorizationToken = (authorization: string): Auth.Models.Jwt => {
    const accessToken = authorization.replace('Bearer ', '');
    return jwt.decode(accessToken) as Auth.Models.Jwt;
};
