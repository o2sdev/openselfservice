import { signIn } from '@/auth';
import { DefaultAuthProvider } from '@/auth/auth.config';

export async function GET(req: Request) {
    const searchParams = new URL(req.url).searchParams;

    const redirectTo = searchParams.get('callbackUrl') ?? '';

    return signIn(DefaultAuthProvider, { redirectTo });
}
