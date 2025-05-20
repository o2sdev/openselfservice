import jwt from 'jsonwebtoken';

export interface Jwt extends jwt.JwtPayload {
    role: string;
    customer: {
        id: string;
        roles: string[];
    };
}
