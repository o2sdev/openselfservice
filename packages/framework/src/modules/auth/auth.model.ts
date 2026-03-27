import jwt from 'jsonwebtoken';

/** Permission matching mode (OpenAPI + TS union). */
export const MATCHING_MODE_VALUES = ['all', 'any'] as const;
export type MatchingMode = (typeof MATCHING_MODE_VALUES)[number];

export type Jwt = jwt.JwtPayload;

export type Role = string;

export interface Permission {
    resource: string;
    actions: string[];
}

export type Permissions = {
    [key: string]: Permission;
};

export const CommonActions = {
    VIEW: 'view',
    CREATE: 'create',
    EDIT: 'edit',
    DELETE: 'delete',
} as const;

export type CommonAction = (typeof CommonActions)[keyof typeof CommonActions];
