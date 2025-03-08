'use client';

import React, { FC } from 'react';

import { Link } from '@o2s/ui/components/link';
import { Typography } from '@o2s/ui/components/typography';

import { Link as NextLink } from '@/i18n';

import { RichText } from '../RichText/RichText';

import { ErrorPageProps } from './ErrorPage.types';

export const ErrorPage: FC<ErrorPageProps> = ({ errorType, title, description, link }) => {
    return (
        <div className="w-full h-full flex flex-col justify-center items-center gap-6 my-24">
            <Typography variant="subtitle">{errorType}</Typography>
            <Typography variant="h1" asChild>
                <h1>{title}</h1>
            </Typography>
            <div className="flex flex-col justify-center items-center gap-6">
                <RichText content={description} className="text-muted-foreground" />
                <Link
                    asChild
                    className="h-10 px-4 py-2 bg-primary text-primary-foreground hover:bg-primary/90 no-underline hover:no-underline"
                >
                    <NextLink href={link.url || '/'}>{link.label}</NextLink>
                </Link>
            </div>
        </div>
    );
};
