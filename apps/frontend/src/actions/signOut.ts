'use server';

import { auth, signOut } from '@/auth';

export async function onSignOut() {
    const session = await auth();

    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

    if (!baseUrl) {
        throw new Error('NEXT_PUBLIC_BASE_URL is required for signOut redirect.');
    }

    const returnTo = encodeURI(baseUrl) + encodeURIComponent('/');

    if (session) {
        await signOut({
            redirectTo: `/api/signOut?callbackUrl=${returnTo}&idToken=${session.idToken}`,
        });
    }
}
