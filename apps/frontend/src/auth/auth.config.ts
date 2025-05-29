import type { AdapterSession } from '@auth/core/adapters';
import type { Account, DefaultSession, Profile } from '@auth/core/types';
import * as Auth from '@o2s/auth.mocked';
import { Session, User } from 'next-auth';
import { AdapterUser } from 'next-auth/adapters';
import { JWT } from 'next-auth/jwt';
import { useSession } from 'next-auth/react';

import { Models } from '@o2s/framework/modules';

import { sdk } from '@/api/sdk';

import { signInSchema } from '@/auth/auth.providers';

const DEFAULT_ROLE = process.env.AUTH_DEFAULT_USER_ROLE!;

type JwtCallbackParams = {
    token: JWT;
    user: User | AdapterUser;
    account?: Account | null;
    profile?: Profile;
    trigger?: 'signIn' | 'signUp' | 'update';
    session?: Session;
};

type SessionCallbackParams = ({
    session: {
        user: AdapterUser;
    } & AdapterSession;
    user: AdapterUser;
} & {
    session: Session;
    token: JWT;
}) & {
    newSession: Session;
    trigger?: 'update';
};

export const Adapter = Auth.Adapter;

export async function updateOrganization(session: ReturnType<typeof useSession>, customer: Models.Customer.Customer) {
    return Auth.updateOrganization(session, customer);
}

export const jwtCallback = async (params: JwtCallbackParams): Promise<JWT | null> => {
    const getCustomer = async (id: string | undefined, accessToken: string) => {
        return id
            ? await sdk.users.getCustomerForCurrentUserById({ id }, accessToken)
            : await sdk.users.getDefaultCustomerForCurrentUser(accessToken);
    };

    return Auth.jwtCallback(getCustomer, params, DEFAULT_ROLE);
};

export const sessionCallback = async (params: SessionCallbackParams): Promise<DefaultSession | Session> => {
    return Auth.sessionCallback(params);
};

export const credentialsCallback = async (
    credentials: Partial<Record<'username' | 'password', unknown>>,
): Promise<User | null> => {
    return Auth.credentialsCallback(credentials, signInSchema);
};
