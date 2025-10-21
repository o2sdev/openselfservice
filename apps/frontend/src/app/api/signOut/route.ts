import { redirect } from 'next/navigation';

import { onSignOut } from '@/auth/auth.config';

export async function GET(req: Request) {
    const searchParams = new URL(req.url).searchParams;

    const redirectTo = searchParams.get('callbackUrl') ?? '';
    const idToken = searchParams.get('idToken') ?? '';

    return onSignOut(redirect, redirectTo, idToken);
}
