import React, { FC } from 'react';

import { RichText } from '@o2s/ui/components/RichText';

import { Link } from '@o2s/ui/elements/link';
import { Typography } from '@o2s/ui/elements/typography';

import { ErrorPageProps } from './ErrorPage.types';

export const ErrorPage: FC<ErrorPageProps> = ({ errorType, title, description, link, LinkComponent }) => {
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
                    <LinkComponent href={link.url || '/'}>{link.label}</LinkComponent>
                </Link>
            </div>
        </div>
    );
};
