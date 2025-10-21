import dynamic from 'next/dynamic';
import React from 'react';

import { sdk } from '../sdk';

import { QuickLinksProps } from './QuickLinks.types';

export const QuickLinksDynamic = dynamic(() => import('./QuickLinks.client').then((module) => module.QuickLinksPure));

export const QuickLinks: React.FC<QuickLinksProps> = async ({ id, accessToken, locale, routing, hasPriority }) => {
    try {
        const data = await sdk.blocks.getQuickLinks(
            {
                id,
            },
            { 'x-locale': locale },
            accessToken,
        );

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
    } catch (_error) {
        return null;
    }
};
