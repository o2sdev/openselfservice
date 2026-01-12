import { DefaultSession } from 'next-auth';

import { Models } from '@o2s/framework/modules';

export * from 'next-auth';
declare module 'next-auth' {
    interface Session extends DefaultSession {
        accessToken: string;
        user?: {
            customer?: {
                id: string;
                name: string;
                permissions: Models.Permission.Permission[];
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
        permissions?: Models.Permission.Permission[];
        customer?: {
            id: string;
            name: string;
            permissions: Models.Permission.Permission[];
        };
    }
}
