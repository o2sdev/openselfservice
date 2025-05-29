'use server';

import { signOut } from 'src/auth/auth';

export async function signOutAction() {
    await signOut();
}
