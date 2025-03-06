import jwt from 'jsonwebtoken';
import { User } from 'next-auth';
import { AdapterUser } from 'next-auth/adapters';
import { JWT } from 'next-auth/jwt';

import { sdk } from '@/api/sdk';

const DEFAULT_ROLE = process.env.AUTH_DEFAULT_USER_ROLE;

interface JwtCallbackParams {
    token: JWT;
    user: User | AdapterUser;
    trigger?: 'signIn' | 'update' | 'signUp';
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    session?: any;
}

// TODO: Implement refresh access token
async function refreshAccessToken(token: JWT) {
    return token;
}

export const mockJwtCallback = async ({ token, user, trigger, session }: JwtCallbackParams) => {
    // Sign in so we fetch customer data and save it on token
    if (trigger === 'signIn') {
        token.role = user.role || DEFAULT_ROLE;
        token.id = user.id;
        await updateCustomerToken(token, user?.defaultCustomerId);
    }
    // Update means that user wants to change customer. Normally you don't want to do this.
    // Instead, you should call your IAM service to change customer and then refresh access token.
    else if (trigger === 'update') {
        await updateCustomerToken(token, session?.customerId);
    }
    // Since we don't have any IAM to provide access token, we just sign it with our own token
    token.accessToken = signUserToken(token);

    if (Date.now() >= token.accessTokenExpires) {
        return refreshAccessToken(token);
    }
    return { ...token, ...user };
};

async function updateCustomerToken(token: JWT, customerId: string | undefined) {
    try {
        const accessToken = signUserToken(token);
        const customer = customerId
            ? await sdk.users.getCustomerForCurrentUserById({ id: customerId }, accessToken)
            : await sdk.users.getDefaultCustomerForCurrentUser(accessToken);

        if (customer) {
            token.customer = {
                id: customer.id,
                roles: customer?.roles?.map((role) => role.role) ?? [],
                name: customer?.name ?? '',
            };
        }
    } catch (error) {
        throw new Error('Error fetching customer data');
    }
}

function signUserToken(token: JWT): string {
    return jwt.sign(
        {
            name: token.name,
            email: token.email,
            role: token.role,
            customer: token?.customer
                ? {
                      id: token.customer.id,
                      roles: token.customer.roles,
                      name: token.customer.name,
                  }
                : undefined,
        },
        'secret',
    );
}
