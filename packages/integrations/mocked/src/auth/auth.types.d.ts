import { DefaultSession } from 'next-auth';

import { Auth } from '@o2s/framework/modules';

export * from 'next-auth';
declare module 'next-auth' {
    interface Session extends DefaultSession {
        accessToken: string;
        user?: {
            customer?: {
                id: string;
                name: string;
                permissions: Auth.Model.Permission[];
                roles?: string[];
            };
        } & DefaultSession['user'];
        error?: 'RefreshTokenError';
    }

    interface User {
        defaultCustomerId?: string;
        accessToken?: string;
    }
}

export * from 'next-auth/jwt';
declare module 'next-auth/jwt' {
    interface JWT {
        accessToken: string;
        accessTokenExpires: number;
        permissions?: Auth.Model.Permission[];
        roles?: string[];
        customer?: {
            id: string;
            name: string;
            permissions: Auth.Model.Permission[];
            roles?: string[];
        };
    }
}
