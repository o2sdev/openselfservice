import { Metadata } from 'next';
import { getLocale } from 'next-intl/server';
import React from 'react';

import { sdk } from '@/api/sdk';

import { generateSeo } from '@/utils/seo';

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
    const locale = await getLocale();

    const data = await sdk.modules.getNotFoundPage({
        'x-locale': locale,
    });

    return (
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
    );
}
