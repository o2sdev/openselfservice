import { Metadata } from 'next';
import { getLocale } from 'next-intl/server';
import { headers } from 'next/headers';
import React from 'react';

import { Toaster } from '@o2s/ui/components/toaster';

import { sdk } from '@/api/sdk';

import { generateSeo } from '@/utils/seo';

import { auth } from '@/auth';

import { GlobalProvider } from '@/providers/GlobalProvider';

import { Footer } from '@/containers/Footer/Footer';
import { Header } from '@/containers/Header/Header';

import { AppSpinner } from '@/components/AppSpinner/AppSpinner';
import { ErrorPage } from '@/components/ErrorPage/ErrorPage';

interface Props {
    params: Promise<{
        locale: string;
        slug: Array<string>;
    }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const locale = await getLocale();

    const slugPrepared = slug ? `/${slug.join('/')}` : '/';

    const data = await sdk.modules.getNotFoundPage({
        'x-locale': locale,
    });

    return generateSeo({
        slug: slugPrepared,
        locale,
        title: data.title,
    });
}

export default async function NotFound() {
    const headersList = await headers();
    const session = await auth();

    const locale = await getLocale();

    const init = await sdk.modules.getInit(
        {
            referrer: headersList.get('referrer') || (process.env.NEXT_PUBLIC_BASE_URL as string),
        },
        { 'x-locale': locale },
        session?.accessToken,
    );

    const data = await sdk.modules.getNotFoundPage({
        'x-locale': locale,
    });

    return (
        <GlobalProvider config={init} labels={init.labels} locale={locale}>
            <div className="flex flex-col min-h-dvh">
                <Header data={init.common.header} />
                <div className="flex flex-col grow">
                    <div className="py-6 px-4 md:px-6 ml-auto mr-auto w-full md:max-w-7xl">
                        <main className="flex flex-col items-center justify-center grow">
                            <ErrorPage
                                errorType="404"
                                title={data.title}
                                description={data.description}
                                link={{
                                    url: data.url || '/',
                                    label: data.urlLabel,
                                }}
                            />
                        </main>
                    </div>
                </div>
                <Footer data={init.common.footer} />

                <Toaster />
                <AppSpinner />
            </div>
        </GlobalProvider>
    );
}
