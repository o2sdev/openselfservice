import { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { headers } from 'next/headers';
import { notFound } from 'next/navigation';
import React from 'react';

import { Separator } from '@o2s/ui/components/separator';
import { Toaster } from '@o2s/ui/components/toaster';
import { Typography } from '@o2s/ui/components/typography';

import { sdk } from '@/api/sdk';

import { generateSeo } from '@/utils/seo';

import { auth, signIn } from '@/auth';

import { GlobalProvider } from '@/providers/GlobalProvider';

import { PageTemplate } from '@/templates/PageTemplate/PageTemplate';

import { Footer } from '@/containers/Footer/Footer';
import { Header } from '@/containers/Header/Header';

import { AppSpinner } from '@/components/AppSpinner/AppSpinner';
import { Breadcrumbs } from '@/components/Breadcrumbs/Breadcrumbs';

interface Props {
    params: Promise<{
        locale: string;
        slug: Array<string>;
    }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const session = await auth();
    const { locale, slug } = await params;

    const finalSlug = slug ? `/${slug.join('/')}` : '/';

    try {
        const { data, meta } = await sdk.modules.getPage(
            {
                slug: finalSlug,
            },
            { 'x-locale': locale },
            session?.accessToken,
        );

        if (meta.isProtected && !session?.user) return signIn();

        if (!data || !meta) {
            notFound();
        }

        setRequestLocale(locale);

        return generateSeo({
            slug: finalSlug,
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
    const headersList = await headers();
    const session = await auth();

    const { locale, slug } = await params;

    const init = await sdk.modules.getInit(
        {
            referrer: headersList.get('referrer') || (process.env.NEXT_PUBLIC_BASE_URL as string),
        },
        { 'x-locale': locale },
        session?.accessToken,
    );

    try {
        const { data, meta } = await sdk.modules.getPage(
            {
                slug: slug ? `/${slug.join('/')}` : '/',
            },
            { 'x-locale': locale },
            session?.accessToken,
        );

        if (meta.isProtected && !session?.user) return signIn();

        if (!data || !meta) {
            notFound();
        }
        return (
            <GlobalProvider config={init} labels={init.labels} locale={locale}>
                <div className="flex flex-col min-h-dvh">
                    <Header data={init.common.header} alternativeUrls={data.alternativeUrls} />
                    <div className="flex flex-col grow">
                        <div className="py-6 px-4 md:px-6 ml-auto mr-auto w-full md:max-w-7xl">
                            <main className="flex flex-col gap-6 row-start-2 items-center sm:items-start">
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
                        </div>
                    </div>
                    <Footer data={init.common.footer} />

                    <Toaster />
                    <AppSpinner />
                </div>
            </GlobalProvider>
        );
    } catch (error) {
        if (
            // @ts-expect-error TODO add proper error type detection
            (error && 'status' in error && error.status === 404) ||
            // @ts-expect-error TODO add proper error type detection
            (error && 'response' in error && 'status' in error.response && error.response.status === 404)
        ) {
            notFound();
        }

        throw error;
    }
}
