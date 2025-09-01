'use client';

import { NextIntlClientProvider } from 'next-intl';
import { Inter } from 'next/font/google';
import { useParams } from 'next/navigation';
import React from 'react';

import { ErrorPage } from '@o2s/ui/components/ErrorPage';

import { Link } from '@/i18n';

import '@/styles/global.css';

const inter = Inter({
    subsets: ['latin-ext'],
    display: 'swap',
});

// when an unexpected error occurs, we cannot rely on the API Harmonization server to provide content
// as the error might be related to that server itself
const CONTENT: {
    [key: string]: {
        title: string;
        description: string;
        action: string;
    };
} = {
    en: {
        title: 'Something went wrong!',
        description: 'The server was unable to complete your request. Please try again later.',
        action: 'Return to Homepage',
    },
    de: {
        title: 'Etwas ist schiefgelaufen!',
        description: 'Der Server konnte Ihre Anfrage nicht abschließen. Bitte versuchen Sie es später erneut.',
        action: 'Zur Startseite zurückkehren',
    },
    pl: {
        title: 'Coś poszło nie tak!',
        description: 'Serwer nie był w stanie zakończyć Twojego żądania. Proszę spróbuj ponownie później.',
        action: 'Powrót do strony głównej',
    },
};

export default function Error() {
    const params = useParams();
    const locale = (params?.locale as string) || 'en';

    const errorData = CONTENT[locale]!;

    return (
        <html lang={locale} className={inter.className}>
            <head>
                <title>{errorData.title}</title>
                <meta name="robots" content="noindex, nofollow" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link rel="preconnect" href="https://images.ctfassets.net" />
            </head>
            <body className="flex flex-col min-h-dvh">
                <NextIntlClientProvider locale={locale} messages={{}}>
                    <main className="flex flex-col items-center justify-center grow">
                        <ErrorPage
                            errorType="500"
                            title={errorData.title}
                            description={errorData.description}
                            link={{
                                url: '/',
                                label: errorData.action,
                            }}
                            LinkComponent={Link}
                        />
                    </main>
                </NextIntlClientProvider>
            </body>
        </html>
    );
}
