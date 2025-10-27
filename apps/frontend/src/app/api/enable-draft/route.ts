import { draftMode } from 'next/headers';
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

    redirect(`/${locale}/${slug}`);
}
