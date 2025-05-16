import { Metadata } from 'next';
import { AuthError } from 'next-auth';
import { setRequestLocale } from 'next-intl/server';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import React from 'react';

import { sdk } from '@/api/sdk';

import { generateSeo } from '@/utils/seo';

import { routing } from '@/i18n/routing';

import { AuthLayout } from '@/containers/Auth/AuthLayout/AuthLayout';
import { FormValues, ResetPasswordForm } from '@/containers/Auth/ResetPassword';

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
    const { locale } = await params;

    try {
        const { data } = await sdk.modules.getLoginPage({ 'x-locale': locale });

        if (!data) {
            notFound();
        }

        const handleResetPassword = async (credentials: FormValues) => {
            'use server';
            console.log('reset password', credentials);
            return Promise.resolve();
        };

        return (
            <AuthLayout>
                <div className="flex flex-col gap-20">
                    <ResetPasswordForm
                        labels={{
                            title: data.title,
                            subtitle: data.subtitle,
                            username: {
                                label: data.username.label,
                                placeholder: data.username.placeholder,
                                errorMessages: data.username?.errorMessages,
                            },
                            resetPassword: data.signIn,
                            invalidCredentials: data.invalidCredentials,
                        }}
                        onResetPassword={handleResetPassword}
                    />
                </div>
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
    } catch (_error) {
        notFound();
    }
}
