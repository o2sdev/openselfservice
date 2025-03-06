import { notFound } from 'next/navigation';
import React from 'react';

import { sdk } from '@/api/sdk';

import { auth, signIn } from '@/auth';

import { PageTemplate } from '@/components/PageTemplate/PageTemplate';

interface Props {
    params: Promise<{
        locale: string;
        slug: Array<string>;
    }>;
}

export default async function Page({ params }: Props) {
    const session = await auth();

    if (!session?.user) return signIn();

    const { locale, slug } = await params;

    const { data } = await sdk.modules.getPage(
        {
            slug: slug ? `/${slug.join('/')}` : '/',
        },
        { 'x-locale': locale },
        session.accessToken,
    );

    if (!data) {
        return notFound();
    }

    return (
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
            <PageTemplate slug={slug} data={data} session={session} />
        </main>
    );
}
