import { DefaultSession } from 'next-auth';

export * from 'next-auth';
declare module 'next-auth' {
    interface Session extends DefaultSession {
        accessToken: string;
        idToken?: string;
        user?: {
            role?: string;
            customer?: {
                id: string;
                roles: string[];
                name: string;
            };
        } & DefaultSession['user'];
        error?: 'RefreshTokenError';
    }

    interface User {
        role?: string;
        password?: string | null;
        defaultCustomerId?: string;
        accessToken?: string;
    }
}

export * from 'next-auth/jwt';
declare module 'next-auth/jwt' {
    interface JWT {
        accessToken: string;
        accessTokenExpires: number;
        idToken?: string;
        role?: string;
        customer?: {
            id: string;
            roles: string[];
            name: string;
        };
    }
}
