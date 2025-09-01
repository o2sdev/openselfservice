'use server';

import { auth, signOut } from '@/auth';

export async function onSignOut() {
    const session = await auth();

    const returnTo = encodeURI(process.env.NEXT_PUBLIC_BASE_URL!) + encodeURIComponent('/');

    if (session) {
        await signOut({
            redirectTo: `/api/signOut?callbackUrl=${returnTo}&idToken=${session.idToken}`,
        });
    }
}
