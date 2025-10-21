import { JWT } from 'next-auth/jwt';

export async function refreshAccessToken(token: JWT): Promise<JWT> {
    return token;
}
