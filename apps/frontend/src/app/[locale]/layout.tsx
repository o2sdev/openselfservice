import { SessionProvider } from 'next-auth/react';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { Inter } from 'next/font/google';
import { headers } from 'next/headers';
import { notFound } from 'next/navigation';
import React from 'react';

import { TooltipProvider } from '@o2s/ui/components/tooltip';

import { sdk } from '@/api/sdk';

import { auth } from '@/auth';

import { routing } from '@/i18n';

import { GlobalProvider } from '@/providers/GlobalProvider';

import { Footer } from '@/containers/Footer/Footer';
import { Header } from '@/containers/Header/Header';

import '@/styles/global.scss';

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
    const headersList = await headers();
    const session = await auth();

    const { locale } = await params;

    if (!routing.locales.includes(locale)) {
        return notFound();
    }

    const init = await sdk.modules.getInit(
        {
            referrer: headersList.get('referrer') || (process.env.NEXT_PUBLIC_BASE_URL as string),
        },
        { 'x-locale': locale },
        session?.accessToken,
    );

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
                        <GlobalProvider config={init} locale={locale}>
                            <TooltipProvider>
                                <div className="flex flex-col min-h-dvh">
                                    <Header headerData={init.common.header} />

                                    <div className="flex flex-col grow">{children}</div>

                                    <Footer data={init.common.footer} />
                                </div>
                            </TooltipProvider>
                        </GlobalProvider>
                    </NextIntlClientProvider>
                </SessionProvider>
            </body>
        </html>
    );
}
