import NextAuth, { NextAuthResult } from 'next-auth';

import { Adapter, DefaultAuthProvider, jwtCallback, sessionCallback, updateOrganization } from './auth.config';
import { providers } from './auth.providers';

export const nextAuthResult = NextAuth({
    debug: true,
    adapter: Adapter,
    providers: providers,
    session: {
        strategy: 'jwt',
        maxAge: 30 * 24 * 60 * 60,
    },
    callbacks: {
        jwt: async (params) => {
            return jwtCallback(params);
        },
        session: async (params) => {
            return sessionCallback(params);
        },
    },
    pages: {
        signIn: DefaultAuthProvider ? '/api/signIn' : '/login',
        signOut: '/api/signOut',
        error: '/error',
    },
    events: {
        signIn: async () => {
            // Handle successful sign in
        },
        signOut: async () => {
            // Handle sign out
        },
    },
});

export const { handlers, signIn, signOut } = nextAuthResult;
export const auth: NextAuthResult['auth'] = nextAuthResult.auth;
export { updateOrganization };
