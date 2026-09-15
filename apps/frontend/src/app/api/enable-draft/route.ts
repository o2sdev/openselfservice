import { cookies, draftMode } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

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
    // `partitioned` (CHIPS) is required for the CMS live-preview iframe:
    // without it Chrome accepts the cookie on the redirect chain but never
    // persists it in the embedded context, so the first client-side render
    // silently drops out of draft mode.
    const cookieStore = await cookies();
    const cookie = cookieStore.get('__prerender_bypass')!;
    cookieStore.set({
        name: '__prerender_bypass',
        value: cookie?.value,
        httpOnly: true,
        path: '/',
        secure: true,
        sameSite: 'none',
        partitioned: true,
    });

    // Slugs may arrive as bare paths ("cases") or full ones ("/", "/cases") -
    // a CMS live preview typically passes the document slug verbatim.
    const path = slug.startsWith('/') ? slug : `/${slug}`;
    const response = NextResponse.redirect(new URL(`/${locale}${path === '/' ? '' : path}`, request.url), 307);
    // Never let the browser reuse this redirect from cache: the bypass cookie
    // it sets must match the server's CURRENT prerender token (regenerated on
    // every fresh build), or draft mode silently stays off.
    response.headers.set('Cache-Control', 'no-store');
    return response;
}
