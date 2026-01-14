import jwt from 'jsonwebtoken';

export type Jwt = jwt.JwtPayload;

export enum MatchingMode {
    ALL = 'all',
    ANY = 'any',
}

export type Role = string;

export interface Permission {
    resource: string;
    actions: string[];
}

export const CommonActions = {
    VIEW: 'view',
    CREATE: 'create',
    EDIT: 'edit',
    DELETE: 'delete',
} as const;

export type CommonAction = (typeof CommonActions)[keyof typeof CommonActions];
