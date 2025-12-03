import dynamic from 'next/dynamic';
import React from 'react';

import { sdk } from '../sdk';

import { QuickLinksProps } from './QuickLinks.types';

export const QuickLinksDynamic = dynamic(() => import('./QuickLinks.client').then((module) => module.QuickLinksPure));

export const QuickLinks = async ({
    id,
    accessToken,
    locale,
    routing,
    hasPriority,
    isDraftModeEnabled,
}: QuickLinksProps) => {
    let data;
    try {
        data = await sdk.blocks.getQuickLinks(
            {
                id,
                preview: isDraftModeEnabled,
            },
            { 'x-locale': locale },
            accessToken,
        );
    } catch (_error) {
        return null;
    }

    return (
        <QuickLinksDynamic
            {...data}
            id={id}
            accessToken={accessToken}
            locale={locale}
            routing={routing}
            hasPriority={hasPriority}
        />
    );
};
