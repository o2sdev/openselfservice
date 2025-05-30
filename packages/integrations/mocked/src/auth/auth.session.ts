import type { AdapterSession } from '@auth/core/adapters';
import type { DefaultSession } from '@auth/core/types';
import { Session } from 'next-auth';
import { AdapterUser } from 'next-auth/adapters';
import { JWT } from 'next-auth/jwt';

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

export const sessionCallback = async ({ token, session }: SessionCallbackParams): Promise<DefaultSession | Session> => {
    if (session.user) {
        session.user.role = token?.role;
        session.user.id = token?.id as string;
        session.user.customer = token?.customer;
        session.accessToken = token.accessToken;
    }
    return session;
};
