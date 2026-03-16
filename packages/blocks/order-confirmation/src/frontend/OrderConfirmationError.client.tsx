'use client';

import { createNavigation } from 'next-intl/navigation';
import React from 'react';

import { DynamicIcon } from '@o2s/ui/components/DynamicIcon';

import { Button } from '@o2s/ui/elements/button';
import { Typography } from '@o2s/ui/elements/typography';

import type { OrderConfirmationProps } from './OrderConfirmation.types';

export interface OrderConfirmationErrorProps extends Pick<OrderConfirmationProps, 'routing'> {
    message?: string;
    redirectPath?: string;
}

const DEFAULT_MESSAGE = 'Something went wrong. Please try again.';

export const OrderConfirmationError: React.FC<Readonly<OrderConfirmationErrorProps>> = ({
    message = DEFAULT_MESSAGE,
    redirectPath = '/',
    routing,
}) => {
    const { Link: LinkComponent } = createNavigation(routing);

    return (
        <div className="w-full max-w-2xl mx-auto flex flex-col gap-8 items-center justify-center py-12">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-destructive/10">
                <DynamicIcon name="AlertCircle" size={40} className="text-destructive" />
            </div>
            <div className="flex flex-col gap-2 text-center">
                <Typography variant="h2">Error</Typography>
                <Typography variant="body" className="text-muted-foreground">
                    {message}
                </Typography>
            </div>
            <Button asChild variant="default">
                <LinkComponent href={redirectPath}>Go back</LinkComponent>
            </Button>
        </div>
    );
};
