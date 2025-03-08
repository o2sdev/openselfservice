import { Inter } from 'next/font/google';
import React from 'react';

import { sdk } from '@/api/sdk';

import { ErrorPage } from '@/components/ErrorPage/ErrorPage';

import '@/styles/global.scss';

const inter = Inter({
    subsets: ['latin-ext'],
    display: 'swap',
});

export default async function NotFound() {
    const data = await sdk.modules.getNotFoundPage({
        'x-locale': 'en',
    });

    return (
        <html lang="en" className={inter.className}>
            <head>
                <title>{data?.title || 'Page not found'} | Open Self Service</title>
                <meta name="robots" content="noindex, nofollow" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link rel="preconnect" href="https://images.ctfassets.net" />
            </head>
            <body>
                <main>
                    <ErrorPage
                        errorType="404"
                        title={data?.title || 'Page not found'}
                        description={data?.description || 'The page you are looking for does not exist.'}
                        link={{
                            url: data?.url || '/',
                            label: data?.urlLabel || 'Home',
                        }}
                    />
                </main>
            </body>
        </html>
    );
}
