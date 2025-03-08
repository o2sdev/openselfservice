'use client';

import { Inter } from 'next/font/google';
import React from 'react';

import { ErrorPage } from '@/components/ErrorPage/ErrorPage';

import '@/styles/global.scss';

const inter = Inter({
    subsets: ['latin-ext'],
    display: 'swap',
});

// hardcoded data from CMS as there seems to be no way to fetch this content at build time
// this should be researched later
export default function Error() {
    const errorData = {
        title: 'Something went wrong!',
        description: '<p>The server was unable to complete your request. Please try again later.</p>',
        link: {
            url: '/',
            label: 'Return to Homepage',
        },
    };
    return (
        <html lang="en" className={inter.className}>
            <head>
                <title>{errorData.title} | Open Self Service</title>
                <meta name="robots" content="noindex, nofollow" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link rel="preconnect" href="https://images.ctfassets.net" />
            </head>
            <body>
                <main>
                    <ErrorPage
                        errorType="500"
                        title={errorData.title}
                        description={errorData.description}
                        link={errorData.link}
                    />
                </main>
            </body>
        </html>
    );
}
