import { Metadata } from 'next';
import { AuthError } from 'next-auth';
import { setRequestLocale } from 'next-intl/server';
import { headers } from 'next/headers';
import { notFound } from 'next/navigation';
import React from 'react';

import { GlobalProvider } from '@o2s/ui/providers/GlobalProvider';

import { AppSpinner } from '@o2s/ui/components/AppSpinner';
import { Image } from '@o2s/ui/components/Image';

import { Toaster } from '@o2s/ui/elements/toaster';

import { sdk } from '@/api/sdk';

import { generateSeo } from '@/utils/seo';

import { auth, signIn } from '@/auth';
import { providerMap } from '@/auth/auth.providers';

import { routing } from '@/i18n/routing';

import { AuthLayout } from '@/containers/Auth/AuthLayout/AuthLayout';
import { FormValues, SignInForm } from '@/containers/Auth/SignInForm';
import { Footer } from '@/containers/Footer/Footer';
import { Header } from '@/containers/Header/Header';

interface Props {
    params: Promise<{
        locale: string;
        slug: string[];
        callbackUrl: string;
    }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { locale } = await params;
    const slug = routing.pathnames['/login']?.[locale] || '/';

    const { seo } = await sdk.modules.getLoginPage({ 'x-locale': locale });

    setRequestLocale(locale);

    return generateSeo({
        slug,
        locale,
        keywords: seo.keywords,
        title: seo.title,
        description: seo.description
            ?.replace(/(<([^>]+)>)/gi, '')
            .replace(/&nbsp;/gi, ' ')
            .replace(/&amp;/gi, '&'),
        image: seo.image || undefined,
        noIndex: seo.noIndex,
        noFollow: seo.noFollow,
        translations: routing.locales,
        alternates: routing.pathnames['/login'],
    });
}

export default async function LoginPage({ params }: Readonly<Props>) {
    const headersList = await headers();
    const session = await auth();
    const { locale, callbackUrl } = await params;

    try {
        const init = await sdk.modules.getInit(
            {
                referrer: headersList.get('referrer') || (process.env.NEXT_PUBLIC_BASE_URL as string),
            },
            { 'x-locale': locale },
            session?.accessToken,
        );

        const { data } = await sdk.modules.getLoginPage({ 'x-locale': locale });

        if (!data) {
            notFound();
        }

        const handleSignIn = async (providerId: string, credentials?: FormValues) => {
            'use server';

            try {
                await signIn(providerId, {
                    ...credentials,
                    redirectTo: callbackUrl ?? '/',
                });
            } catch (error) {
                if (error instanceof AuthError) {
                    return error;
                }
                throw error;
            }
        };

        return (
            <GlobalProvider config={init} labels={init.labels} locale={locale}>
                <div className="flex flex-col min-h-dvh">
                    <Header data={init.common.header} />
                    <div className="flex flex-col grow">
                        <AuthLayout>
                            <SignInForm
                                providers={providerMap}
                                labels={{
                                    title: data.title,
                                    subtitle: data.subtitle,
                                    password: {
                                        label: data.password.label,
                                        placeholder: data.password.placeholder,
                                        hide: data.labels?.hide,
                                        show: data.labels?.show,
                                        errorMessages: data.password?.errorMessages,
                                    },
                                    username: {
                                        label: data.username.label,
                                        placeholder: data.username.placeholder,
                                        errorMessages: data.username?.errorMessages,
                                    },
                                    signIn: data.signIn,
                                    providers: data.providers,
                                    invalidCredentials: data.invalidCredentials,
                                }}
                                onSignIn={handleSignIn}
                            />
                            {data.image?.url && (
                                <Image
                                    src={data.image?.url}
                                    alt={data.image?.alt}
                                    fill={true}
                                    className="object-cover"
                                />
                            )}
                        </AuthLayout>
                    </div>
                    <Footer data={init.common.footer} />

                    <Toaster />
                    <AppSpinner />
                </div>
            </GlobalProvider>
        );
    } catch (_error) {
        notFound();
    }
}
