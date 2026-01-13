import dynamic from 'next/dynamic';
import React from 'react';

import type { Model } from '../api-harmonization/quick-links.client';
import { sdk } from '../sdk';

import { QuickLinksProps } from './QuickLinks.types';

export const QuickLinksDynamic = dynamic(() => import('./QuickLinks.client').then((module) => module.QuickLinksPure));

export const QuickLinks: React.FC<QuickLinksProps> = async ({
    id,
    accessToken,
    locale,
    routing,
    hasPriority,
    isDraftModeEnabled,
}) => {
    let data: Model.QuickLinksBlock;
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
