import { Metadata } from 'next';
import { AuthError } from 'next-auth';
import { setRequestLocale } from 'next-intl/server';
import Image from 'next/image';
import { notFound, redirect } from 'next/navigation';
import React from 'react';
import { providerMap } from 'src/auth.providers';

import { sdk } from '@/api/sdk';

import { generateSeo } from '@/utils/seo';

import { signIn } from '@/auth';

import { routing } from '@/i18n/routing';

import { AuthLayout } from '@/components/Auth/AuthLayout/AuthLayout';
import { FormValues, SignInForm } from '@/components/Auth/SignInForm';

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
    const { locale, callbackUrl } = await params;

    try {
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
                    return redirect(`/error?error=${error.type}`);
                }
                throw error;
            }
        };

        return (
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
                    }}
                    onSignIn={handleSignIn}
                />
                {data.image?.url && (
                    <Image
                        src={data.image?.url}
                        alt={data.image?.alternativeText ?? ''}
                        fill={true}
                        className="object-cover"
                    />
                )}
            </AuthLayout>
        );
    } catch (error) {
        notFound();
    }
}
