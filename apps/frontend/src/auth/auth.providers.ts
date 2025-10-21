import { Provider } from 'next-auth/providers';
import GitHub from 'next-auth/providers/github';

import { Providers } from './auth.config';

export const providers: Provider[] = [
    ...Providers,
    GitHub({
        clientId: process.env.GITHUB_CLIENT_ID,
        clientSecret: process.env.GITHUB_CLIENT_SECRET,
        profile(profile) {
            return {
                id: profile.id.toString(),
                email: profile.email,
                role: process.env.AUTH_DEFAULT_USER_ROLE,
                name: profile.name ?? profile.login,
            };
        },
    }),
];

export type Providers = {
    id: string;
    name: string;
    icon?: string;
}[];

export const providerMap: Providers = providers
    .map((provider) => {
        if (typeof provider === 'function') {
            const providerData = provider();
            return { id: providerData.id, name: providerData.name };
        } else {
            return {
                id: provider.id,
                name: provider.name,
                logo: `logo-${provider.id}`,
            };
        }
    })
    .filter((provider) => provider.id !== 'credentials');
