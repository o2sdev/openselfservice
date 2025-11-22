import NextAuth, { NextAuthResult } from 'next-auth';

import { Adapter, DefaultAuthProvider, jwtCallback, sessionCallback } from './auth.config';
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
    cookies: {
        sessionToken: {
            name: `authjs.session-token`,
            options: {
                httpOnly: true,
                sameSite: 'none',
                path: '/',
                secure: true,
            },
        },
        callbackUrl: {
            name: `authjs.callback-url`,
            options: {
                httpOnly: true,
                sameSite: 'none',
                path: '/',
                secure: true,
            },
        },
        csrfToken: {
            // Default to __Host- for CSRF token for additional protection if using useSecureCookies
            // NB: The `__Host-` prefix is stricter than the `__Secure-` prefix.
            name: `authjs.csrf-token`,
            options: {
                httpOnly: true,
                sameSite: 'none',
                path: '/',
                secure: true,
            },
        },
        pkceCodeVerifier: {
            name: `authjs.pkce.code_verifier`,
            options: {
                httpOnly: true,
                sameSite: 'none',
                path: '/',
                secure: true,
                maxAge: 60 * 15, // 15 minutes in seconds
            },
        },
        state: {
            name: `authjs.state`,
            options: {
                httpOnly: true,
                sameSite: 'none',
                path: '/',
                secure: true,
                maxAge: 60 * 15, // 15 minutes in seconds
            },
        },
        nonce: {
            name: `authjs.nonce`,
            options: {
                httpOnly: true,
                sameSite: 'none',
                path: '/',
                secure: true,
            },
        },
        webauthnChallenge: {
            name: `authjs.challenge`,
            options: {
                httpOnly: true,
                sameSite: 'none',
                path: '/',
                secure: true,
                maxAge: 60 * 15, // 15 minutes in seconds
            },
        },
    },
});

export const { handlers, signIn, signOut } = nextAuthResult;
export const auth: NextAuthResult['auth'] = nextAuthResult.auth;
