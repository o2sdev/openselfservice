import { Provider } from 'next-auth/providers';
import Credentials from 'next-auth/providers/credentials';
import GitHub from 'next-auth/providers/github';
import { object, string } from 'zod';

import { credentialsCallback } from './auth.config';

export const providers: Provider[] = [
    Credentials({
        credentials: {
            username: { label: 'Username', placeholder: 'admin', type: 'text' },
            password: { label: 'Password', placeholder: 'admin', type: 'password' },
        },
        authorize: async (credentials) => {
            return await credentialsCallback(credentials);
        },
    }),
    GitHub({
        clientId: process.env.GITHUB_CLIENT_ID,
        clientSecret: process.env.GITHUB_CLIENT_SECRET,
        profile(profile) {
            return {
                id: profile.id.toString(),
                email: profile.email,
                role: 'selfservice_user' as const,
                name: profile.name ?? profile.login,
            };
        },
    }),
];

export type Providers = {
    id: string;
    name: string;
}[];

export const providerMap: Providers = providers
    .map((provider) => {
        if (typeof provider === 'function') {
            const providerData = provider();
            return { id: providerData.id, name: providerData.name };
        } else {
            return { id: provider.id, name: provider.name };
        }
    })
    .filter((provider) => provider.id !== 'credentials');

export const signInSchema = object({
    username: string().email('Must be a valid email'),
    password: string().min(4, 'Password must be at least 4 characters'),
});
