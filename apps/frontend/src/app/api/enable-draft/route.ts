import { cookies, draftMode } from 'next/headers';
import { redirect } from 'next/navigation';
import { NextRequest } from 'next/server';

export async function GET(request: NextRequest) {
    const { searchParams } = new URL(request.url);
    const secret = searchParams.get('secret');
    const slug = searchParams.get('slug');
    const locale = searchParams.get('locale');

    if (!secret || !slug || !locale) {
        return new Response('Missing parameters', { status: 400 });
    }

    if (secret !== process.env.CF_PREVIEW_SECRET) {
        return new Response('Invalid token', { status: 401 });
    }

    (await draftMode()).enable();

    // Override cookie header for draft mode for usage in live-preview
    // https://github.com/vercel/next.js/issues/49927
    const cookieStore = await cookies();
    const cookie = cookieStore.get('__prerender_bypass')!;
    cookieStore.set({
        name: '__prerender_bypass',
        value: cookie?.value,
        httpOnly: true,
        path: '/',
        secure: true,
        sameSite: 'none',
    });

    redirect(`/${locale}/${slug}`);
}
