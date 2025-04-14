import { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import React from 'react';

import { Separator } from '@o2s/ui/components/separator';
import { Typography } from '@o2s/ui/components/typography';

import { sdk } from '@/api/sdk';

import { generateSeo } from '@/utils/seo';

import { auth, signIn } from '@/auth';

import { PageTemplate } from '@/templates/PageTemplate/PageTemplate';

import { Breadcrumbs } from '@/components/Breadcrumbs/Breadcrumbs';
import { Client } from '@/components/Client';

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

    try {
        const { data, meta } = await sdk.modules.getPage(
            {
                slug: slugPrepared,
            },
            { 'x-locale': locale },
            session?.accessToken,
        );

        if (!data || !meta) {
            notFound();
        }

        setRequestLocale(locale);

        return generateSeo({
            slug: slugPrepared,
            locale,
            keywords: meta.seo.keywords,
            title: meta.seo.title,
            description: meta.seo.description
                ?.replace(/(<([^>]+)>)/gi, '')
                .replace(/&nbsp;/gi, ' ')
                .replace(/&amp;/gi, '&'),
            image: meta.seo.image || undefined,
            noIndex: meta.seo.noIndex,
            noFollow: meta.seo.noFollow,
            translations: meta.locales,
            alternates: data?.alternativeUrls,
        });
    } catch (_error) {
        notFound();
    }
}

export default async function Page({ params }: Props) {
    const session = await auth();

    if (!session?.user) return signIn();

    const { locale, slug } = await params;

    try {
        const { data, meta } = await sdk.modules.getPage(
            {
                slug: slug ? `/${slug.join('/')}` : '/',
            },
            { 'x-locale': locale },
            session.accessToken,
        );

        if (!data || !meta) {
            notFound();
        }

        return (
            <main className="flex flex-col gap-6 row-start-2 items-center sm:items-start">
                <Client page={data} />

                <div className="flex flex-col gap-6 w-full">
                    <Breadcrumbs breadcrumbs={data.breadcrumbs} />
                    {!data.hasOwnTitle && (
                        <>
                            <Typography variant="h1" asChild>
                                <h1>{meta.seo.title}</h1>
                            </Typography>
                            <Separator />
                        </>
                    )}
                </div>

                <PageTemplate slug={slug} data={data} session={session} />
            </main>
        );
    } catch (_error) {
        notFound();
    }
}
