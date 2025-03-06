import { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import React from 'react';

import { Separator } from '@o2s/ui/components/separator';
import { Typography } from '@o2s/ui/components/typography';

import { sdk } from '@/api/sdk';

import { generateSeo } from '@/utils/seo';

import { auth, signIn } from '@/auth';

import { PageTemplate } from '@/components/PageTemplate/PageTemplate';

interface Props {
    params: Promise<{
        locale: string;
        slug: Array<string>;
    }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const session = await auth();
    const { locale, slug } = await params;

    if (!session?.user) return signIn();
    const slugPrepared = slug ? `/${slug.join('/')}` : '/';

    const { data, seo } = await sdk.modules.getPage(
        {
            slug: slugPrepared,
        },
        { 'x-locale': locale },
        session?.accessToken,
    );

    setRequestLocale(locale);

    if (!data) {
        let title = 'Page not found';
        switch (locale) {
            case 'de':
                title = 'Seite nicht gefunden';
                break;
            case 'pl':
                title = 'Strona nie znaleziona';
                break;
        }

        return generateSeo({
            slug: slugPrepared,
            locale,
            title,
            noIndex: true,
            noFollow: true,
        });
    }

    return generateSeo({
        slug: slugPrepared,
        locale,
        title: seo.title,
        description: seo.description
            ?.replace(/(<([^>]+)>)/gi, '')
            .replace(/&nbsp;/gi, ' ')
            .replace(/&amp;/gi, '&'),
        image: seo.image || undefined,
        noIndex: seo.noIndex,
        noFollow: seo.noFollow,
        translations: seo.locales,
        alternates: data.alternativeUrls,
    });
}

export default async function Page({ params }: Props) {
    const session = await auth();

    if (!session?.user) return signIn();

    const { locale, slug } = await params;

    const { data, seo } = await sdk.modules.getPage(
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
        <main className="flex flex-col gap-6 row-start-2 items-center sm:items-start mt-6">
            {!data.hasOwnTitle && (
                <div className="flex flex-col gap-6 w-full">
                    <Typography variant="h1" asChild>
                        <h1>{seo.title}</h1>
                    </Typography>
                    <Separator />
                </div>
            )}

            <PageTemplate slug={slug} data={data} session={session} />
        </main>
    );
}
