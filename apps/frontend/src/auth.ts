import { PrismaAdapter } from '@auth/prisma-adapter';
import NextAuth, { NextAuthResult } from 'next-auth';

import { mockJwtCallback } from './auth.mock';
import { providers } from './auth.providers';
import { prisma } from './lib/prisma';

export const nextAuthResult = NextAuth({
    debug: true,
    adapter: PrismaAdapter(prisma),
    providers: providers,
    session: {
        strategy: 'jwt',
        maxAge: 30 * 24 * 60 * 60,
    },
    callbacks: {
        jwt: async (params) => {
            return mockJwtCallback(params);
        },
        session: async ({ session, token }) => {
            if (session.user) {
                session.user.role = token?.role;
                session.user.id = token?.id as string;
                session.user.customer = token?.customer;
                session.accessToken = token.accessToken;
            }
            return session;
        },
    },
    pages: {
        signIn: '/login',
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
