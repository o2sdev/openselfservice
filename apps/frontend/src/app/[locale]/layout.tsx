import { SessionProvider } from 'next-auth/react';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { Inter } from 'next/font/google';
import { notFound } from 'next/navigation';
import React from 'react';

import { TooltipProvider } from '@o2s/ui/elements/tooltip';

import { auth } from '@/auth';

import { routing } from '@/i18n';

import '@/styles/global.css';

const inter = Inter({
    subsets: ['latin-ext'],
    display: 'swap',
});

interface Props {
    children: React.ReactNode;
    params: Promise<{
        locale: string;
    }>;
}

export default async function RootLayout({ children, params }: Props) {
    const session = await auth();

    const { locale } = await params;

    if (!routing.locales.includes(locale)) {
        return notFound();
    }

    setRequestLocale(locale);

    const messages = await getMessages();

    return (
        <html lang={locale} className={inter.className}>
            <head>
                <link rel="icon" type="image/png" href="/favicon/favicon-96x96.png" sizes="96x96" />
                <link rel="icon" type="image/svg+xml" href="/favicon/favicon.svg" />
                <link rel="shortcut icon" href="/favicon/favicon.ico" />
                <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
                <meta name="apple-mobile-web-app-title" content="Open Self Service" />
            </head>
            <body>
                {/*@see https://github.com/nextauthjs/next-auth/issues/9504#issuecomment-2516665386*/}
                <SessionProvider key={session?.user?.id} session={session} refetchOnWindowFocus={false}>
                    <NextIntlClientProvider messages={messages}>
                        <TooltipProvider>{children}</TooltipProvider>
                    </NextIntlClientProvider>
                </SessionProvider>
            </body>
        </html>
    );
}
